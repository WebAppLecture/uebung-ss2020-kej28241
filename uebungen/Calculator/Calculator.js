import {MyMath} from "../../loesungen/MyMath.js";
import {CalculationParser} from "../../loesungen/CalculationParser.js";

export class Calculator {

    constructor(numpad, screen, output) {
        this._numpad = numpad;
        this._screen = screen;
        this._output = output;
        this._parser = new CalculationParser(MyMath.signRules);
    }

    print(string) {
        this._screen.innerHTML += string;
    }

    printSolution(string) {
        this._output.innerHTML = string;
    }

    setupNumPad() { 
        ["x<sup>y</sup>","x!","DEL","AC",7,8,9,"/",4,5,6,"*",1,2,3,"-",0,".","+","="].forEach(e => {
            let button = this.createButton(e);
            button.addEventListener("click", this.onButtonClick.bind(this, e))
            this._numpad.appendChild(button);
        });
    }

    createButton(text) {
        let button = document.createElement("button");
        button.innerHTML = text;
        return button;
    }

    onButtonClick(symbol) {
        switch(symbol) {
            case "DEL":
                this.delete();
                break;
            case "AC":
                this.clear();
                break;
            case "=":
                this.printSolution(this.calculate());
                break;
            case "x<sup>y</sup>":
                symbol = "^";
            case "x!":
                symbol = "";
            default:
                this.print(symbol);
        }       
    }

    calculate() {
        return this._parser.parse(this._screen.innerHTML);
    }

    delete() {
        this._screen.innerHTML = this._screen.innerHTML.substring(0, this._screen.innerHTML.length - 1);
    }

    clear() {
        this._screen.innerHTML = "";
        this._output.innerHTML = "";
    }

}

window.Calculator = Calculator;

window.calc = new Calculator(document.querySelector(".numpad"), document.querySelector("#input"), document.querySelector("#output"));
calc.setupNumPad();