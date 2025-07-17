const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    historySize: 10,
    history: []
})




interface T_Calculate{
    add(firstNumber: number, secondNumber: number) : number;
    subtract(firstNumber: number, secondNumber: number) : number;
    divide(firstNumber: number, secondNumber: number) : number;
    multiply(firstNumber: number, secondNumber: number) : number;
    power(firstNumber: number, secondNumber: number) : number;
    percentage(firstNumber: number, secondNumber: number) : number;
    square_root(firstNumber: number, secondNumber: number) : number
}

interface Calculate{
    (firstNumber: number, secondNumber: number) : number;
}

/**
 * STEP 2
 * This is a Calculator App that does basic arithmetic operations:
 * Addition
 * Subtraction
 * Multiplication
 * Division
 */ 
class Calculator implements T_Calculate{

    // result: number;

    /**
     * This method performs a basic Addition operation:
     * It accepts 2 parameters
     * @param {number} firstNumber 
     * @param {number} secondNumber 
     * @returns number
     */
    add(firstNumber: number, secondNumber: number): number{
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
    subtract(firstNumber: number, secondNumber: number): number{
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
    multiply(firstNumber: number, secondNumber: number): number{
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
    divide(firstNumber: number, secondNumber: number): number {
        try {
            if(secondNumber === 0) throw new Error(`You can't divide by 0. Enter a number other than 0`);
            else{
                return firstNumber / secondNumber;
            }
        } catch (error: any) {
            return error.message
        }
        // this.result = firstNumber / secondNumber;
        // return this.result;
    };

    power(firstNumber: number, secondNumber: number): number{
        return firstNumber ** secondNumber;
    }

    square_root(firstNumber: number, secondNumber: number): number{
        secondNumber = 1 // equating second user input to 1.
        return Math.sqrt(firstNumber) * 1;
    }

    percentage(firstNumber: number, secondNumber: number): number{
        return (firstNumber / secondNumber * 100);
    }

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
interface T_menu {
    greet(msg:string): void;
    displayOptions(): void;
}

/**
 * This menu class houses 2 methods:
 * - greet method that logs the initial greeting
 * - display option method that shows different available arithmetic operations
 */
class Menu implements T_menu{
    /**
     * This is a message logger method. It displays greetings and other info
     * @param {string} msg 
     */
    greet(msg: string){
        console.log(msg)
    }

    /**
     * This displayOption method shows all available arithmetic operations with the corresponding user input number.
     */
    displayOptions(){
        console.log(
        `
        Select your preferred operation:
        0. Exit
        1. Addition 
        2. Subtraction
        3. Multiplication
        4. Division
        5. Power
        6. Square root
        7. Percentage
        Enter choice (0-7): `
        )
    }
};

interface T_Operations{
    menu: T_menu
}

/**
 * This class Operations help perform arithmetic operations.
 * It has 2 dependencies (dependent classes), Menu and Calculator.
 * It has 2 methods:
 * - rlQuestion method which servers as a utility for serving different arithmetic operation
 * - userInput method which handles user input that determines choice of operations
 */
class Operations {
    private menu: T_menu;
    private calculate: T_Calculate
    constructor(calculate: T_Calculate, menu: T_menu){
        this.menu = menu
        this.calculate = calculate
    }

    /**
     * This is a Readline(Question) reusable method to help keep the code DRY
     * @param {function} operation 
     */
    rlQuestion(operation:Calculate){
        //recursive function for input validation and to allow user retry after invalid input
        function recursiveQuestion (){
            rl.question('Enter first number:', (num1:string)=>{
                rl.question('Enter second number:', (num2:string)=>{
                    const number1 = parseInt(num1);
                    const number2 = parseInt(num2);
                    // const number1 = parseFloat(num1)
                    // const number2 = parseFloat(num2)
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
        // Menu
        this.menu.greet(`\n Hello! Welcome to my CLI Calculator App`);
        this.menu.displayOptions()
        // User input for arithmetic operations with validations
        rl.on('line', (input: string)=>{
            if(parseInt(input) === 1){
                this.rlQuestion(this.calculate.add)
            }else if (parseInt(input) === 2){
                this.rlQuestion(this.calculate.subtract)
            }else if (parseInt(input) === 3){
                this.rlQuestion(this.calculate.multiply)
            }else if (parseInt(input) === 4){
                this.rlQuestion(this.calculate.divide)
            }else if (parseInt(input)=== 5){
                this.rlQuestion(this.calculate.power)
            }
            else if(parseInt(input)=== 6){
                //Show info that only 1st input is used for the operation
                this.menu.greet(`Hello! For validation purpose, you have to enter 2 inputs but only the first input is used for the Sqrt operation.`); 
                this.rlQuestion(this.calculate.square_root)
            }
            else if(parseInt(input)=== 7){
                this.rlQuestion(this.calculate.percentage)
            }
            else if (parseInt(input) === 0){
                rl.close();
            }else{
                console.log(`Enter a valid input from 1-5`)
            }
        })
    }

};

// console.log(rl.history);
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