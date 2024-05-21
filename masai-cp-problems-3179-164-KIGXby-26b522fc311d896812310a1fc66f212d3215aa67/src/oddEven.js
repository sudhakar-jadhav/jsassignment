function generateNumber() {
  // generate a random integer(hint : Math.random)
  let number = Math.floor(Math.random() * 10 + 1);
  let div = document.getElementById("number");
  // console.log(number);
  div.textContent = number;
  checkOddEven(number);
}

function checkOddEven(num) {
  // logic for even / odd
  let div = document.getElementById("odd-even");
  if (num % 2 == 0) {
    div.textContent = "The number is even";
  } else {
    div.textContent = "The number is odd";
  }
}

window.onload = function () {
  // add event listeners to the button here
  let btn = document.getElementById("generate-number");
  btn.addEventListener("click", generateNumber());
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
