// código para teste da calculadora  
class Calculator {
    constructor() {
        this.result = 0;
    }

    somar(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return Error;
        }
        return num1 + num2;
    }

    multiplicar(num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return Error;
        }
        return num1 * num2;
    }
}

module.exports = Calculator;

