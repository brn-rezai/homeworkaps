//? 6. write a reduce method to get the sum of all array items
const arr = [ 31, 1, 7, 12, 27 ];

const total = arr.reduce( ( n1, n2 ) => {
    return n1 + n2;
} );

//! Answer: 
console.log( total );

