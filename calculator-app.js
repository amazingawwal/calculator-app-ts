/**
 * STEP 2
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
// console.log(`Addition: ${calculate.add(2,4)}`);
// console.log(`Subtraction: ${calculate.subtract(14,4)}`);
// console.log(`Multiply: ${calculate.multiply(10,4)}`);
// console.log(`Division: ${calculate.division(1,0)}`);


/**
 * STEP 3
 * Command Line Interface
 * shows a 'Welcome Message'
 * shows 'Available Options'
 * Main Menu Loop Implementation
 */

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Menu{
    constructor(){

    }

    greet(){
        console.log(`\n Hello! Welcome to my CLI Calculator App`)
    }

    displayOptions(){
        console.log(
        `
        Select your preferred operation:
        1. Addition 
        2. Subtraction
        3. Multiplication
        4. Division
        5. Exit
        Enter choice (1-5): `
        )
    }
};

class Operations{

    addition(){
        rl.question('Enter first number:', (num1)=>{
            rl.question('Enter second number:', (num2)=>{
                const number1 = parseInt(num1)
                const number2 = parseInt(num2)
                console.log(calculate.add(number1, number2))
                rl.close()
            })
        })
    }

}

class Input{

    userInput(){
        mainMenu.greet();
        mainMenu.displayOptions()
        rl.on('line', (input)=>{
            if(parseInt(input) === 1){
                performOperation.addition()
            }
        })
    }
}

const mainMenu = new Menu();
const performOperation = new Operations();
const performInput = new Input()
performInput.userInput();




