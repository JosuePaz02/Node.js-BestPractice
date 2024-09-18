const fs = require("fs");
const { Module } = require("module");
const path = require("path");

const saveToDatabase = (DB) => {
  fs.writeFileSync(
    path.join(__dirname, "db.json"),
    JSON.stringify(DB, null, 2),
    {
      encoding: "UTF8",
    }
  );
};

module.exports = { saveToDatabase };
