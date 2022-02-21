const fs = require("fs");
const path = require("path");

module.exports = {
  getKnowledgeData: () => {
    const data = fs.readFileSync(
      path.resolve(__dirname, "./data/knowledge.json")
    );

    //将二进制的数据转换为字符串,再将字符串转换为json对象
    return JSON.parse(data.toString());
  },
  getAQAnswer: (search) => {
    let data = fs.readFileSync(path.resolve(__dirname, "./data/aq.json"));
    data = JSON.parse(data.toString());

    const { res } = data;

    for (let i = 0; i < res.length; i++) {
      if (res[i].question === search) {
        return res[i];
      }
    }

    return {};
  },
};
