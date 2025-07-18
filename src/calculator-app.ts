import { type } from 'node:os';
import * as readline from 'node:readline/promises';

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function add(a:number, b:number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a + b;
};

function multiply(a: number, b: number): number {
    return a + b;
};

function divide(a: number, b: number): number {
    try {
        if(b === 0) throw new Error(`You can't divide by 0. Enter a number other than 0`);
        else{
            return a / b;
            }
        } 
    catch (error: any) {
            return error.message
        }
};


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

function mainMenuLoop() {
    
}





// async function promptForOperation(): Promise<string> {
//   return new Promise((resolve) => {
//     rl.once('line', (input: string) => {
//         resolve(input);
//         rl.close()
//     });
//   });
// }

// async function name () {
//     const name = await promptForOperation()
//     console.log('output is',name);
    
// }



// async function getNumberInput(prompt: string): Promise<number>  {
//     const input = await rl.question('Enter first number:')
//     return parseFloat(input)
// }

// getNumberInput(promptForOperation())

// async function validateNumber(input: string): Promise<number | null> {
//     return value;
// };

async function promptHandler(): Promise<string>{

    async function promptForOperation(): Promise<string> {
        return new Promise((resolve) => {
            rl.once('line', (input: string) => {
                resolve(input);
                rl.close()
            });
        });
    };
    const prompt = promptForOperation()
    return prompt
};



async function getNumberInput(prompt: string): Promise<number>  {
    const result = parseFloat(prompt)
    console.log('This is result',result)
    return result
};


function validateNumber(input: string): number | null {
    if (typeof input !== 'string'){
        return null
    };
    const newInput = parseFloat(input);
    return newInput;
};


async function operations() {
    
    // const number1 = await rl.question('Enter your first number');
    // const firstNumber = validateNumber(number1);

    // const number2 = await rl.question('Enter your second number');
    // const secondNumber =validateNumber(number2);

    const prompt  = await promptHandler()
    const promptNumber = await getNumberInput(prompt);


    if (promptNumber === 1){
        console.log('one');
    }else{
        console.log('Two')
    }
    
}

operations();