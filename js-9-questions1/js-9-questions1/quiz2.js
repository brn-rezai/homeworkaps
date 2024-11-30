//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
console.log( "wait 5 sec" );

// todo2: and then after 5 seconds logs “ready?”
setTimeout( () => {

    console.log( "ready?" );

}, 5000 );

// todo3: and finally logs “”  every one second

setTimeout( () => {
    let i = 1;

    const t = setInterval(() => {
      if (i === 10) {
        clearInterval(t);
      }
        ++i;
        console.log("🚀");
       
    }, 1000);
   
}, 5100 );



// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)
 


//!   Answer:


