// function doSomething(cb) {
//   console.log('do something.....');
//   cb();
// }

// const nextStep = () => {
//   console.log('callback called');
// }

// doSomething((nextStep));

const calculateNameLength = (name, cb) => {
    const length = name.length;
    cb(length);
}

// calculateNameLength('John', (length) => {
//     console.log(`The length is ${length}`);
// });

// console.log('before the setTime out');
// const secondsInMilliSeconds = 1000;
// setTimeout(() => {
//     console.log('A second has passed');
// }, secondsInMilliSeconds);

// console.log('after the setTime out');


// var secondsInMilliSeconds = 1000;
// let totalExecutions=0;
// console.log('before the setInterval');
// const handle = setInterval(() => {
//     totalExecutions++;
//     console.log(`A second has passed , this is the ${totalExecutions} execution`);
//     if(totalExecutions==5){
//         clearInterval(handle);
//     }
// }, secondsInMilliSeconds);
// console.log('after the setInterval');

const doSomething = (cb) => {
  const error = new Error("Something went wrong")
  cb(error,null)
}

doSomething((error = false,result) => {
  error = false
  if(error){
      console.log("There was an error")
      return;
  }
  console.log("Result: " + result)
  console.log("Every thing went well")
})

