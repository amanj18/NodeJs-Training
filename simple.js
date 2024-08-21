// const cal = require('./calculator');
const {add, PI} = require('./calculator');
// const calc = require('./calcESModule.mjs');
// import {add, PI} from './calculator.js';

console.log('welcome');
// console.log(message);
let addResult = add(10, 20);
console.log("add result "+ addResult);
let area = PI * 10 * 10;
console.log("Area of circle "+ area);

import ('./calcESModule.mjs').then(
    es=> {
        console.log(es.default);
        console.log(es.multiply(10, 20));
        console.log(es.divide(10, 20));
    }
)