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

// const doSomething = (cb) => {
//   const error = new Error("Something went wrong")
//   cb(error,null)
// }

// doSomething((error = false,result) => {
//   error = false
//   if(error){
//       console.log("There was an error")
//       return;
//   }
//   console.log("Result: " + result)
//   console.log("Every thing went well")
// })

// readFile("docs.md", (err, mdContent) => {
//     convertMarkdownToHTML (mdContent, (err, htmlContent) => {
//     addCssStyles (htmlContent, (err, docs) => {
//     saveFile(docs, "docs.html", (err, result) => {
//     ftp.sync((err, result) => {
// })
// })
// })
// })
// })

// //Promise Chaining
// fetch('https://api.demo.foo/v1/todo')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));


// const setTimeOutPromise = (time) => {
//   return new Promise((resolve,reject) => {
//       setTimeout(() => {
//           resolve()
//       },time)
//   });
// }

// console.log("Before set time out promise")
// setTimeOutPromise(1000).then(() => console.log('one second later'));
// console.log("After set time out promise")

const randomTimeOutPromise = () => {
  return new Promise((resolve, reject) => {
      const time = Math.floor(Math.random() * 1000);
      setTimeout(() => {
          console.log(`Promise Resolved in ${time}ms`)
          resolve(time);
      }, time);
  })
}

//Promise.all(). The all method produces a singular promise that resolves
// once all the promises are resolved or if any of the promises are rejected

// Promise.all(
//   [randomTimeOutPromise(),
//   randomTimeOutPromise(),
//   randomTimeOutPromise(),
//   randomTimeOutPromise(),
//   randomTimeOutPromise()
//   ]
// ).then((results) => console.log("Results" + results));

// Promise.race([
//   randomTimeOutPromise(),
//   randomTimeOutPromise(),
//   randomTimeOutPromise(),
//   randomTimeOutPromise(),
//   randomTimeOutPromise(),
// ]).then((result) => {
//   console.log("Result from Race : ", result);
// });

const generatePromise = shouldFail => {
    return new Promise((resolve, reject) => {
        if(shouldFail) {
            return reject(new Error("Rejected!"));
        }
        resolve("Success!");
    });
};

generatePromise(true)
.then(result => console.log("Result: ", result))
.catch(error => console.log("Error message: ", error.message))
.finally(() => console.log("Promis settled"));



// generatePromise(true).catch(error => console.log("Error message: ", error));

// Chaining promises
// generatePromise()
// .then(generatePromise)
// .then(result => {

// return generatePromise(true);
// })
// .then(() => console.log("This will be called"))
// .catch(error => console.log("Error message: ",error));

// //Promise Chaining
// fetch('https://api.demo.foo/v1/todo')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));


const fetchData = async() =>{
    try{
        const response = await fetch('https://api.demo.foo/v1/todo');
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.log(error);
    }
}

// fetchData();