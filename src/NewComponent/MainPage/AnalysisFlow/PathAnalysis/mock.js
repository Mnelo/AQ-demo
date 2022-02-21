const createTable = () => {
  return new Array(25).fill(0).map((_, index) => {
    const num = index + 1;

    return {
      id: num,
      phenomenon: '问题现象' + num,
      cause: '问题根因' + num,
      matchType: '匹配类型' + num,
      score: 100 - num,
      status: num % 2,
    }
  });
}

const tableData = createTable();

export {
  tableData
}
