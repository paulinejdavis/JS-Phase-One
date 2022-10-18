// // Creating a function
// const aFunction = () => {
//     return 123;
//   }
  
//   // Functions can be referenced as values, without the brackets ()
//   // here we are essentially assigning the exact same function to a new name.
//   const anotherFunction = aFunction;
  
//   // When using the brackets (), we're *calling* the function
//   // so we'll get the value returned by it.
//   const returnValue = anotherFunction();

//   const uppercaseMessage = (message) => {
//     return message.toUpperCase();
//   }
  
//   // This function accepts as arguments a string message, and a function.
//   // It then calls the given function to do its job.
//   const transform = (message, transformFunction) => {
//     return transformFunction(message);
//   }
  
//   transform("hello", uppercaseMessage);

'HELLO'.toLowerCase();

const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

lowercaseMessage('HI THERE');

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

transform('HI THERE', lowercaseMessage);

const uppercaseMessage = (message) => {
    return message.toUpperCase();
}

//give function to other functions and call them later

//callback are regular function but can be called back later

const printMessage = () => {
    console.log('Hello!');

}

setTimeout(printMessage, 3000);


const printHello = () => {
    console.log('Hello!');

}

setTimeout(printHello, 3000);

const executeAfterDelay = (delay, callbackFunction) => {
    setTimeout(callbackFunction, delay * 1000);
}
executeAfterDelay(5,printHello);