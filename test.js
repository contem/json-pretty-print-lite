const prettyPrint = require("json-pretty-print-lite");

const data = {
  name: "Yunus",
  age: 28,
  tech: ["Node.js", "Vue.js"],
  details: { city: "Amasya", role: "Dev" }
};

// Colored output
prettyPrint(data);

// Non-colored output with 4-space indentation
prettyPrint(data, false, 4);
