// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// my solution
// function chunk(array, size) {
//     //setting a blank array to fill
//     const newArray = [];
//     //make a small array using slice by size 
//     for (let i = 0; i < array.length; i+=size) {
//         newArray.push(array.slice(i, i + size))
//     }
//     //newArray.push(smallArray)
//     console.log(newArray)
//     return newArray
// }

// module.exports = chunk;


// function chunk(array, size) {
//     const newArray = [];
//     // iterating through each number in the array
//     for (let element of array){
//         //create a last position of an empty array to put elements into
//         const last = newArray[newArray.length - 1]
//         // push elements as an array in certain positontions
//         if (!last || last.length === size){
//             newArray.push([element]);
//         } else{
//             last.push(element)
//         }
//     }
    
//     return newArray
// }

// module.exports = chunk;

function chunk(array, size) {
    const newArray = [];
    let index = 0;

    while(index < array.length){
        newArray.push(array.slice(index, index + size));
        index += size;
    }
    
    return newArray
}

module.exports = chunk;

