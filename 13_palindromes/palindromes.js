const palindromes = function (str) {
    const regex = /\s*[*!?\-,.\s*]\s*/gi;

    const strReplace = str.replace(regex, "").toLowerCase();
    const finalStr = strReplace.split("")
    .reverse()
    .join("");

    console.log(finalStr);
    console.log(strReplace);

    return finalStr === strReplace;
};

console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
