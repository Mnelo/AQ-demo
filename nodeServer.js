// node .\nodeServer.js 启动后端服务
const express = require("express");
const app = express();

const nodeServerFuc = require("./nodeServerFuc/api");

// 跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
});

app.get("/knowledge", function (req, res) {
  res.send(nodeServerFuc.getKnowledgeData());
});

app.get("/aq", function (req, res) {
  setTimeout(() => {
    res.send(nodeServerFuc.getAQAnswer(req.query.search));
  }, 1000);
});

app.get("/factorList", function (req, res) {
  setTimeout(() => {
    res.send(nodeServerFuc.getFactorList(req.query.search));
  }, 500);
});

app.get("/analysisList", function (req, res) {
  setTimeout(() => {
    res.send(nodeServerFuc.getAnalysis(req.query.search));
  }, 500);
});

app.get("/report", function (req, res) {
  setTimeout(() => {
    res.send(nodeServerFuc.getReport(req.query.search));
  }, 500);
});

var server = app.listen(8081, function () {
  // var host = server.address().address;
  var port = server.address().port;

  console.log("服务启动成功。 http://localhost:", port);
});
