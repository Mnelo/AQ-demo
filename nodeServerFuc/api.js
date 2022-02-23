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
  // 第二步归因分析获取因子匹配列表
  getFactorList: (search) => {
    let data = fs.readFileSync(
      path.resolve(__dirname, "./data/factorList2.json")
    );

    data = JSON.parse(data.toString());

    const { res } = data;

    for (let i = 0; i < res.length; i++) {
      if (res[i].search === search) {
        return res[i];
      }
    }

    return {};
  },
  // 第三步路径分析列表
  getAnalysis: (search) => {
    let data = fs.readFileSync(
      path.resolve(__dirname, "./data/PathAnalysis.json")
    );

    data = JSON.parse(data.toString());

    const { res } = data;

    for (let i = 0; i < res.length; i++) {
      if (res[i].search === search) {
        return res[i];
      }
    }

    return {};
  },
  // 第四步报告数据
  getReport: (search) => {
    let data = fs.readFileSync(
      path.resolve(__dirname, "./data/reportData.json")
    );

    data = JSON.parse(data.toString());

    const { res } = data;

    for (let i = 0; i < res.length; i++) {
      if (res[i].search === search) {
        return res[i];
      }
    }

    return {};
  },
};
