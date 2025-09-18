const findTheOldest = function(arr) {
    const date = new Date;
    arr.forEach(item => {
        if(!item.yearOfDeath){
            item.yearOfDeath = date.getFullYear();
        }
    })
    const oldest = arr.sort((a, b) => (a.yearOfBirth - a.yearOfDeath) - (b.yearOfBirth - b.yearOfDeath));
    return oldest[0];
};
    const people = [
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.log(people);
// Do not edit below this line
module.exports = findTheOldest;
