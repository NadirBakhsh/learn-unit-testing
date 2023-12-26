function add(a, b) {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `parameters should be in number`;
}

module.exports = add;
