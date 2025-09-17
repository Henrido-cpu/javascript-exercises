
/*
in order to get the member at specified position, you have to iterate through an array of numbers in fibonacci sequence.
Creating fibonacci sequence:

u have to create an collection of numbers and then check
for each number if it equals two preceding numbers,
if not then remove it and if yes then keep it.


*/
const fibonacci = function(num) {
    const arr = [];
    for(i = 1; arr.length <= num; i++){
        if(arr.length >= 2){
            let value = arr[i - 1] + arr[i - 2];
            arr.push(value);
        }else{
            arr.push(i);
            arr.push(i);
        }
    }
    if(num === 0 || num === "0"){
        return 0;
    }else if(num < 0){
        return "OOPS";
    }
    return arr[num - 1];
};



console.log(fibonacci(25));

/*
1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5
*/

// Do not edit below this line
module.exports = fibonacci;
