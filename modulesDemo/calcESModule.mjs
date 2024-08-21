const message = "from ES6 module";

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

export default message;
export { divide, multiply };