import readlineSync from 'readline-sync';

export const greetingsUser = (info = null) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name: ');
    console.log(`Hello, ${name}!`);
    if(info !== null) {(console.log(info));}
    return name
}

//вывод вопроса и получение на него ответа
export const userAnsver = (value) => {
    console.log(`Question: ${value}`)
    const answer = readlineSync.question("Your answer: ")
    return answer
}