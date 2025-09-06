const removeFromArray = function(arr, num) {
    let numArr = num.splice(",");
    let filtered = [];
    numArr.forEach(number =>{
        filtered = arr.filter(item => item !== number);
    })
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
