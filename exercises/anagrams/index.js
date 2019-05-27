// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     //taking the non characters out of string
//     //convert str to lowercase
//     let myStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//     let myStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//     //see if the strings have the same number of character
    
//     if (myStringA.length !== myStringB.length) {
//         return false;
//     }

//     // convert strings to object trees
//     const obj1 = {};
//     for (let char of myStringA) {
//         if (obj1[char]) {
//             obj1[char]++;
//         } else {
//             obj1[char] = 1;
//         }
//     }

//     const obj2 = {};
//     for (let char of myStringB) {
//         if (obj2[char]) {
//             obj2[char]++;
//         } else {
//             obj2[char] = 1;
//         }
//     }

//     for (let char in obj1) {
//         if (obj1[char] ==! obj2[char]){
//             return false;
//         }
//     }

//     return true;



// }
// module.exports = anagrams;


function anagrams(stringA, stringB) {
    //compare the tho ordered strings
    return sortString(stringA) === sortString(stringB)
}
function sortString(str) {
    //remove noncharacters from string, make characters lowercase
    //use split to make it an array, use sort to order it, use join to convert back to string
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
module.exports = anagrams;