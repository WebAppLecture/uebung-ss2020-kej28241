import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        

        this.numpad = numpad;
        this.outputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.setupNumPad();
    }

    setupNumPad() { 
        let Tasten = [1,2,3,'+',4,5,6,'-',7,8,9,'*','%',0,'^','/','AC','DEL','x!'];
        for (let j=0;j<Tasten.length;j++){
            let element = document.createElement("button");
            this.numpad.appendChild(element);
            element.innerText=Tasten[j];
            element.addEventListener('click', this.onButtonClick.bind(this, element.innerText));
        }
        


        // alte Tasten html
    //    let tasten = this.numpad.children;
    //   for (let i=0; i<tasten.length; i++){
    //       let Taste = tasten[i];
    //        let TastenZiffer = Taste.innerText;
    //        Taste.addEventListener('click', this.onButtonClick.bind(this, TastenZiffer));
    //    }
    
    }

    onButtonClick(symbol) {
        console.log(symbol);
            switch(symbol){
                case "+": {
                     this.currentoperation = this.solution.add;
                }
                case "-": {
                    this.currentoperation = this.solution.subtract;
                }
                case "*": {
                    this.currentoperation = this.solution.multiply;
                }
                case "/": {
                    this.currentoperation = this.solution.divide;
                }
                case "%": {
                    this.currentoperation = this.solution.modulo;
                }
                case "^": {
                    this.currentoperation = this.solution.pow;
                }
                case "x!": {
                    this.currentoperation = this.solution.faculty();
                }
                break;
           }

    

    }
    onNumberClick(number){
        if (!this.solution){
            this.solution = new MyMath(number)
        }
        else {
            let calculation = this.currentoperation.bind(this.solution);
            this.solution =calculation(number);
        }

    }

    print(string) {
        console
    }

    printSolution(string) {

    }

    clear() {

    }

}
