/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */


    constructor(value) {


        if (value === undefined) {
            value = 0;
        }      

        

        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        this.value = value * 1; 
    
    }

    add(value) {
        let z = this.value;
        this.value += value;
        console.log(z, "+", value, "=", this.value);
        return this;
    }

    subtract(value) {
        let z = this.value;
        this.value -= value;
        console.log(z, "-", value, "=", this.value);
        return this;

    }

    multiply(value) {
        let z = this.value;
        this.value *= value;
        console.log(z, "*", value, "=", this.value);
        return this;

    }

    divide(value) {
        let z = this.value;
        this.value /= value;
        console.log(z, "/", value, "=", this.value);
        return this;

    }

    pow(value) {
        let z = this.value;
        if(value < 0){
            alert("nur positive Potenzen");
        }
        else {
            let x = this.value;
            //console.log(x)
            let i=value-1;
            //console.log(i)
            for(i;i--;1){
                this.value = this.value * x;
                //console.log(x,i,this.value)
            }
            console.log(z, "^", value, "=", this.value);
            return this;

        }
        

    }

    faculty() {
        if (this.value % 1 === 0){
           let i = this.value;
           let x = this.value;
           let n = 0;
           for(i;i--;1){
               this.value = this.value * (x - n)
              n = n + 1;
              //console.log("i ist ", i, ", n ist ", n, ", x ist ", this.value)
            }
            console.log(n, "!", "=", this.value);
            return this;
        }
        else {alert("Nur ganze Zahlen!")}

        
    }
}
