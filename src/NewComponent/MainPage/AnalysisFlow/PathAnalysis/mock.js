// 路径分析数据
const genTable = () => {
  return new Array(25).fill(0).map((_, index) => {
    const num = index + 1;

    return {
      id: num,
      phenomenon: '问题现象' + num,
      cause: '问题根因' + num,
      matchType: '匹配类型' + num,
      score: 100 - num,
      status: num % 2
    }
  });
}

// 路径排查数据
const genPathCheck = () => {
  return new Array(5).fill(0).map((_, index) => {
    const num = index + 1;

    return {
      id: num,
      causeName: '电池失效',
      causeStatus: num % 2,
      method: '人工添加',
      explain: ''
    }
  });
}

const tableData = genTable();
const pathTable = genPathCheck();

export {
  tableData,
  pathTable
}
