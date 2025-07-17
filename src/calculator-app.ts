import * as readline from 'node:readline';

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


const result = divide(2,0);
console.log(result)

function displayWelcomeMessage(): void {
    console.log('Welcome to Node.js Calculator!')
}