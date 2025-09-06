/*
GET number to use
Convert number through formula 
RETURN new number in celsius or fahrenheit.
*/


const convertToCelsius = function(num) {

  if(typeof(num) !== "number"){
    return "ERROR";
  }
  const convertedNum = (num - 32) * (5 / 9);
  return Math.round(convertedNum * 10) / 10;
};

const convertToFahrenheit = function(num) {
  if(typeof(num) !== "number"){
    return "ERROR";
  }
  const convertedNum = num * 9/5 + 32;
  return Math.round(convertedNum * 10) / 10;
};
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
