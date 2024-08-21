// const calc = require('./calculator')
const {add,PI} = require('./calculator')
console.log('welcome')

// console.log(message)

let addResult = add(5,6)

console.log("Add result" + addResult)
let area = PI*3*3
console.log("Area" + area)

//to import a ES6 module dynamically
import ('./calcFSModule.mjs').then(
    es=> {console.log(es.default);
        console.log(es.multiple(10,10));
    }
)




async function divide () {
    const es6Module = await import('./calcFSModule.mjs')
    const result = await es6Module.divide(100, 5);
    console.log("Divison result" + result);
}

divide();