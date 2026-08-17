// Function that takes another function as an argument and calls it after 1 second delay
function delayedCall(anotherFn: () => void) {
    // In this case, it will call anotherFn after 1 second
    setTimeout(anotherFn, 1000);
}

// Function that logs "Hello" to the console when called 
function log() {
    console.log("Hello"); // Hello will be printed after 1 second
}

delayedCall(log); 
