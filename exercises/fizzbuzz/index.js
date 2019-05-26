// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// my solution
// function fizzBuzz(n) {
//     for(let i = 1; i <= n ; i++){
//         let print = '';
//         if (i%3 !== 0 && i%5 !== 0) {
//             print = i
//         }
//         if (i%3 === 0){
//             print += "fizz"
//         }
//         if (i%5 === 0){
//             print += "buzz"
//         }
//         console.log(print)
//     }
// }

// module.exports = fizzBuzz;

function fizzBuzz(n) {
    for(let i = 1; i <= n ; i++){
        // is it divisibel by 3 and 5, lcd is 15
        if (i%15 === 0){
            console.log("fizzbuzz")
        } else if (i%3 === 0){
            // is it just divisible by 3
            console.log("fizz")
        } else if (i%5 === 0){
            // is it just divisible by 5
            console.log("buzz")
        } else{
            // else give the normal number
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;