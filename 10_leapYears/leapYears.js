/*Check if year is divisible by 4
Check if year is not divisible by 100 unless also divisible by 400*/

const leapYears = function(year) {
    
    if(year % 400 === 0){
        return true;
    }else if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }else{
        return false;
    }
};
console.log(leapYears(1600));
// Do not edit below this line
module.exports = leapYears;
