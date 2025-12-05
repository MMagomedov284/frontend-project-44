import readlineSync from 'readline-sync';

const greetingsUser = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('Your answer: ');
    console.log(`hello, ${name}!`);
}

export { greetingsUser };