const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((sum, currVal) => sum + currVal, 0);
};

const multiply = function(arr) {
  if(arr == []){
    return 0;
  }
  return arr.reduce((sum, currVal) => sum * currVal, 1);
};

const power = function(num1, num2) {
  let power = 1;
  let sum = 0;
	for(i = 0; i < num2; i++){
    power *= num1;
    sum += power * num1
  }
  return power;
};

const factorial = function(n) {
  let arr = [];
  while(n > 0){
    arr.unshift(n);
    --n;
  }
  console.log(arr);
return arr.reduce((prev, curr) => prev * curr, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
