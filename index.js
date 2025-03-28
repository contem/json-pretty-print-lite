const util = require("util");

/**
 * Pretty prints a JSON object to the console.
 *
 * @param {Object} data - The JSON-compatible object to print.
 * @param {boolean} [color=true] - Whether to use colored output.
 * @param {number} [indent=2] - Number of spaces for indentation.
 */
function prettyPrintJSON(data, color = true, indent = 2) {
  if (color) {
    console.log(util.inspect(data, { colors: true, depth: null }));
  } else {
    console.log(JSON.stringify(data, null, indent));
  }
}

module.exports = prettyPrintJSON;
