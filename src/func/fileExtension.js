import word from "../Asset/Image/word.svg";

/**
 * @description 根据文件后缀返回文件图标
 */
const getFileEx = (ext) => {
  if (ext === "word") {
    return word;
  }
};

export { getFileEx };
