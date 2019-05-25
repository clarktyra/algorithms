// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//my first solution
function reverse(str) {
    let arr = [];
    for (let char of str) {
        arr.unshift(char)
    }; 
    return arr.toString().replace(/,/g, "");
}


module.exports = reverse;

//solution 1
// convert string to array
// uses array.reverse()
// function reverse(str) {
//     // const arr = str.split('');
//     // arr.reverse();
//     // return arr.join('')
//     return str.split('').reverse().join('')
// }


// module.exports = reverse;

// function reverse(str) {
//     let reversed = '';

//     for (let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }


// module.exports = reverse;

// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }


// module.exports = reverse;