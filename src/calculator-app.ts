import * as readline from 'node:readline/promises';

enum OperationChoice {
    ADD = 1,
    SUBTRACT = 2,
    MULTIPLY = 3,
    DIVIDE = 4,
    EXIT = 5
}

interface CalculatorOperation {
    name: string;
    symbol: string;
    operation: (a: number, b: number) => number;
}

interface CalculationHistory {
    operation: string;
    operand1: number;
    operand2: number;
    result: number;
}

let historyStore: CalculationHistory[] = [];


const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    history: historyStore.map(entry=>{
        return `${entry}`
    })
});

type Operations = {
    (firstNumber: number, secondNumber: number) : number;
}

// function add(a:number, b:number): number {
//     return a + b;
// }

const add: CalculatorOperation = {
    name: 'Addition',
    symbol: '+',
    operation: (a:number, b:number): number => a+b
}

const subtract: CalculatorOperation = {
    name: 'Subtraction',
    symbol: '-',
    operation: (a:number, b:number): number => a-b
}

const multiply: CalculatorOperation = {
    name: 'Multiplication',
    symbol: '*',
    operation: (a:number, b:number): number => a*b
}
// function multiply(a: number, b: number): number {
//     return a * b;
// };


const divide: CalculatorOperation = {
    name: 'Division',
    symbol: '/',
    operation: (a:number, b:number): number => {
        try {
            if(b === 0) throw new Error(`You can't divide by 0. Enter a number other than 0`);
            else{
                return a / b;
            }
        } 
        catch (error: any) {
            return error.message
        }
    }
};
// function divide(a: number, b: number): number {
//     try {
//         if(b === 0) throw new Error(`You can't divide by 0. Enter a number other than 0`);
//         else{
//             return a / b;
//             }
//         } 
//     catch (error: any) {
//             return error.message
//         }
// };


// const result = divide(2,0);
// console.log(result)

function displayWelcomeMessage(): void {
    console.log('Welcome to Node.js Calculator!')
}

function showOperations(): void {
    console.log(`Select operation:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit`)
};

function mainMenuLoop(): void {
    displayWelcomeMessage();
    showOperations();
};

async function promptHandler(): Promise<string>{

    async function promptForOperation(): Promise<string> {
        return new Promise((resolve) => {
            rl.once('line', (input: string) => {
                resolve(input);
            });
        });
    };
    const prompt = await promptForOperation()
    return prompt
};



async function getNumberInput(prompt: string): Promise<number>  {
    const result = parseFloat(prompt)
    return result
};


// function validateNumber(input: string): number | null {
//     const newInput = parseFloat(input);
//     return isNaN(newInput)? null : newInput
// };


function isValidNumber(value: string): boolean {
    const newInput = parseFloat(value);
    return isNaN(newInput);
}


async function operations(calculate: Operations): Promise<OperationChoice> {

    const number1 = await rl.question('Enter your first number:');
    const number2 = await rl.question('Enter your second number:');

    if(isValidNumber(number1) || isValidNumber(number2)){
        console.error(`${number1} and ${number2} are not valid numbers. Enter valid numbers`);
        rl.close;
    }
        const firstNumber = await getNumberInput(number1);
        const secondNumber = await getNumberInput(number2);
        const result = calculate(firstNumber, secondNumber)
        console.log(`Result is: ${result}`);
        rl.close();
    
    return result
}

// function exitGracefully(): void {
//     rl.close
// };

async function calculate(): Promise<OperationChoice> {

    mainMenuLoop();

    const prompt  = await promptHandler();
    const promptNumber = await getNumberInput(prompt);
    switch (promptNumber) {
        case OperationChoice.ADD:
            console.log(`You chose ${add.name} - '${add.symbol}'`)
            return operations(add.operation)
            // break;
        case OperationChoice.SUBTRACT:
            console.log(`You chose ${subtract.name} - '${subtract.symbol}'`)
            return operations(subtract.operation)
            // break;
        case OperationChoice.MULTIPLY:
            console.log(`You chose ${multiply.name} - '${multiply.symbol}'`)
            return operations(multiply.operation)
            // break;
        case OperationChoice.DIVIDE:
            console.log(`You chose ${divide.name} - '${divide.symbol}'`)
            return operations(divide.operation)
            // break;
        case 5:
            console.log(`BYE..`)
            rl.close()
            // break;
        default:
            console.log('Enter a number from 1-5 for your preferred operation');
            return calculate();
    }
}

calculate();
