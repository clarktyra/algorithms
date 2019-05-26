// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//my solution
function palindrome(str) {
    const revStr = str.split('').reverse().join('');
    return revStr === str;
}

module.exports = palindrome;

//alternative solution 
// function palindrome(str) {
//    return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     })
// }

// module.exports = palindrome;