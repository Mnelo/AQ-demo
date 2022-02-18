const fs = require("fs");
const path = require("path");

module.exports = {
  getKnowledgeData: () => {
    const data = fs.readFileSync(
      path.resolve(__dirname, "./data/knowledge.json")
    );

    return data;
  },
};
