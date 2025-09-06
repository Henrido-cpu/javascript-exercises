/*
GET 2 numbers representing start and end point.
INITIALIZE empty arr = to hold the numbers between start and end point.
loop through the array and and every number to sum.
GET every number in between.
INITIALIZE variable to hold sum of all numbers.
RETURN sum
*/

const sumAll = function(num1, num2) {
    if(typeof(num1) !== "number" || typeof(num2) !== "number" || num1 < 0 || num2 < 0 || num1 !== Math.floor(num1) || num2 !== Math.floor(num2)){
        return "ERROR";
    }

    let biggerNum = 0;
    let smallerNum = 0; 
    if(num2 > num1){
        biggerNum += num2;
        smallerNum += num1;
    }else{
        biggerNum += num1;
        smallerNum += num2;
    }
    let sum = 0;
    for(i = smallerNum; i <= biggerNum; i++){
        sum += i;
    }
    return sum;
};

console.log(sumAll(123, 1));


// Do not edit below this line
module.exports = sumAll;
