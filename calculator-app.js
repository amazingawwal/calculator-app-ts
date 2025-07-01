/**
 * This is a Calculator App that does basic arithmetic operations:
 * Addition
 * Subtraction
 * Multiplication
 * Division
 */ 

class Calculator{

    result;

    /**
     * This method performs a basic Addition operation:
     * It accepts 2 parameters
     * @param {number} firstNumber 
     * @param {number} secondNumber 
     * @returns number
     */
    add(firstNumber, secondNumber){
        this.result = firstNumber + secondNumber;
        return this.result;
    };


    /**
     * This method performs a basic Subtraction operation:
     * It accepts 2 parameters
     * @param {number} firstNumber 
     * @param {number} secondNumber 
     * @returns number
     */
    subtract(firstNumber, secondNumber){
        this.result = firstNumber - secondNumber;
        return this.result;
    };

    /**
     * This method performs a basic Multiplication operation:
     * It accepts 2 parameters
     * @param {number} firstNumber 
     * @param {number} secondNumber 
     * @returns number
     */
    multiply(firstNumber, secondNumber){
        this.result = firstNumber * secondNumber;
        return this.result;
    };



    /**
     * This method performs a basic Division operation:
     * It accepts 2 parameters
     * @param {number} firstNumber 
     * @param {number} secondNumber 
     * @returns number
     */
    division(firstNumber, secondNumber){
        if(secondNumber === 0) throw new Error("You can't divide by 0. Enter a number other than 0");
        this.result = firstNumber / secondNumber;
        return this.result;
    };


}

const calculate = new Calculator();
console.log(`Addition: ${calculate.add(2,4)}`);
console.log(`Subtraction: ${calculate.subtract(14,4)}`);
console.log(`Multiply: ${calculate.multiply(10,4)}`);
console.log(`Division: ${calculate.division(1,0)}`);


