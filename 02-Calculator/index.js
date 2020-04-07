import {Calculator} from './Calculator.js';
window.Calculator = Calculator;

let numpad = document.querySelector('.numpad');
let Calculation = document.querySelector('#calculation');
let Solution = document.querySelector('#solution');

window.calc = new Calculator(numpad, Calculation, Solution);

