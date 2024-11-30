//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
//!  Answer:

let more6char = array.filter( ( n ) => n.length > 6 )
console.log( more6char );

let isless10char = more6char.every( ( item ) => item.length < 10 )
console.log(isless10char);


