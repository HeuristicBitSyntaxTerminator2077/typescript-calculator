import * as readline from 'readline';

function calculate(a: number, b: number, op: string): number | string {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error: Division by zero';
        default: return 'Error: Invalid operator';
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Simple TypeScript Calculator');
rl.question('Enter first number: ', (a) => {
    rl.question('Enter operator (+, -, *, /): ', (op) => {
        rl.question('Enter second number: ', (b) => {
            const numA = parseFloat(a);
            const numB = parseFloat(b);
            const result = calculate(numA, numB, op);
            console.log('Result:', result);
            rl.close();
        });
    });
});
