import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, screen, output) {

        this.setupNumPad();
    }

    print(string) {

    }

    printSolution(string) {

    }

    setupNumPad() { 

    }

    onButtonClick(symbol) {
    
    }

    calculate() {

    }

    delete() {

    }

    clear() {

    }

}

window.Calculator = Calculator;

window.calc = new Calculator(document.querySelector(".numpad"), document.querySelector("#input"), document.querySelector("#output"));
