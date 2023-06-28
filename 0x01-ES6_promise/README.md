0x01. ES6 Promises
link: https://javascript.info/promise-basics
A Promise is a special object that connects code that needs to produce 
a result and the code that needs to use this result in the next step.
The constructor syntax for a promise object is:

let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

The function passed to new Promise is called the executor.
When new Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result.