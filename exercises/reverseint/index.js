// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//my solution
// function reverseInt(n) {
//     const typeInt = Math.sign(n)
//     if (typeInt == 1){
//         var number = n.toString().split('').reverse().join('');
//         number = parseInt(number);
//         return number;
//     } else if (typeInt == -1){
//         n = n * -1;
//         var number = n.toString().split('').reverse().join(''); 
//         number = parseInt(number) * -1
//         return number
//     } else if (n == 0) {
//         return n
//     } else {
//         return NaN
//     }
// }

// module.exports = reverseInt;

function reverseInt(n) {
   const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;