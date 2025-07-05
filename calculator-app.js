const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    historySize: 10,
    history: ['first', 'second']
})


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
        return firstNumber + secondNumber;
        // this.result = firstNumber + secondNumber;
        // return this.result;
    };


    /**
     * This method performs a basic Subtraction operation:
     * It accepts 2 parameters
     * @param {number} firstNumber 
     * @param {number} secondNumber 
     * @returns number
     */
    subtract(firstNumber, secondNumber){
        return firstNumber - secondNumber;
        // this.result = firstNumber - secondNumber;
        // return this.result;
    };

    /**
     * This method performs a basic Multiplication operation:
     * It accepts 2 parameters
     * @param {number} firstNumber 
     * @param {number} secondNumber 
     * @returns number
     */
    multiply(firstNumber, secondNumber){
        return firstNumber * secondNumber;
        // this.result = firstNumber * secondNumber;
        // return this.result;
    };



    /**
     * This method performs a basic Division operation:
     * It accepts 2 parameters
     * @param {number} firstNumber 
     * @param {number} secondNumber 
     * @returns number
     */
    divide(firstNumber, secondNumber){
        try {
            if(secondNumber === 0) throw new Error(`You can't divide by 0. Enter a number other than 0`);
            else{
                return firstNumber / secondNumber;
            }
        } catch (error) {
            return `${error.message}`
        }
        // this.result = firstNumber / secondNumber;
        // return this.result;
    };

}

// const calculate = new Calculator();
// console.log(`Addition: ${calculate.add(2,4)}`);
// console.log(`Subtraction: ${calculate.subtract(14,4)}`);
// console.log(`Multiply: ${calculate.multiply(10,4)}`);
// console.log(`Division: ${calculate.division(1,0)}`);


/**
 * STEP 3, 4 qnd 5
 * Command Line Interface
 * shows a 'Welcome Message'
 * shows 'Available Options'
 * Main Menu Loop Implementation
 */


/**
 * This menu class houses 2 methods:
 * - greet method that logs the initial greeting
 * - display option method that shows different available arithmetic operations
 */
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

/**
 * This class Operations help perform arithmetic operations.
 * It has 2 dependencies (dependent classes), Menu and Calculator.
 * It has 2 methods:
 * - rlQuestion method which servers as a utility for serving different arithmetic operation
 * - userInput method which handles user input that determines choice of operations
 */
class Operations{
    constructor(calculate, menu){
        this.menu = menu
        this.calculate = calculate
    }

    /**
     * This is a Readline(Question) reusable method to help keep the code DRY
     * @param {function} operation 
     */
    rlQuestion(operation){
        //recursive function for input validation and to allow user retry after invalid input
        function recursiveQuestion (){
            rl.question('Enter first number:', (num1)=>{
                rl.question('Enter second number:', (num2)=>{
                    const number1 = parseFloat(num1)
                    const number2 = parseFloat(num2)
                    if (isNaN(number1) || isNaN(number2)) {
                        console.log(`${number1} or ${number2} is not a number. Enter valid numbers only `)
                        recursiveQuestion();
                        return;
                    }
                    console.log(operation(number1, number2))
                    rl.close()
            })
        })
        }
        return recursiveQuestion();
    }



    /**
     * This is User Input method helps determine the operations type to be performed
     */
    userInput(){
        this.menu.greet();
        this.menu.displayOptions()
        rl.on('line', (input)=>{
            if(parseInt(input) === 1){
                this.rlQuestion(this.calculate.add)
            }else if (parseInt(input) === 2){
                this.rlQuestion(this.calculate.subtract)
            }else if (parseInt(input) === 3){
                this.rlQuestion(this.calculate.multiply)
            }else if (parseInt(input) === 4){
                this.rlQuestion(this.calculate.divide)
            }else if (parseInt(input) === 5){
                rl.close();
            }else{
                console.log(`Enter a valid input from 1-5`)
            }
        })
    }

};

console.log(rl.history);
const menu = new Menu();
const calculate = new Calculator();
const performOperation = new Operations(calculate, menu);
performOperation.userInput();


    // addition(){
    //     rl.question('Enter first number:', (num1)=>{
    //         rl.question('Enter second number:', (num2)=>{
    //             const number1 = parseInt(num1)
    //             const number2 = parseInt(num2)
    //             console.log(this.calculate.add(number1, number2))
    //             rl.close()
    //         })
    //     })
    // }


    // subtraction(){
    //     rl.question('Enter first number:', (num1)=>{
    //         rl.question('Enter second number:', (num2)=>{
    //             const number1 = parseInt(num1)
    //             const number2 = parseInt(num2)
    //             console.log(this.calculate.add(number1, number2))
    //             rl.close()
    //         })
    //     })
    // }