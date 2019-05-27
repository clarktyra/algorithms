// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     var counter = 0;
//     for (let char of str.toLowerCase()){
//         if( char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
//             counter ++;
//         }
//     }
//     return counter;
// }

// module.exports = vowels;


// function vowels(str) {
//     // set up my counter variable and my array of vowels that I will look for
//     var counter = 0;
//     var arrayVowels = ['a', 'e', 'i', 'o', 'u']
//     // use a for let loop to loop through the string that has bring converted to lowercase
//     // use .includes() to see if each character is included in the array or vowels
//     for (let char of str.toLowerCase()){
//         if(arrayVowels.includes(char)){
//             counter++;
//         }
//     }
//     return counter;
// }

// module.exports = vowels;


function vowels(str) {
    //create an array of all the matches of aeiou to the str
    const array = str.match(/[aeiou]/gi);
    // returns the arrays length, unless if the array is null, return zero 
    return array ? array.length : 0;
}

module.exports = vowels;