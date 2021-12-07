function init() {
  const multiply = function (callback) {
    return callback(2, 3) * 10;
  };

  const add = function (a, b) {
    return a + b;
  };

  const sub = function (a, b) {
    return a - b;
  };

  console.log(multiply(add));
}

window.addEventListener("load", init);
