import readlineSync from 'readline-sync';

// Узнаем имя пользователя 
const greetingsUser = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name: ');
    console.log(`Hello, ${name}!`);
    return name
}

// проверка коректности ответа от пользователя + информивания пользователя если ответ не верный
const checkAnsver = (answer, correctAnsver, userName) => {
    if (answer === correctAnsver) {
        console.log("Correct!")
    } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnsver}". Let's try again, ${userName}`)
        return false
    }
}

//вывод вопроса и получение на него ответа
const userAnsver = (value) => {
    console.log(`Question: ${value}`)
    const answer = readlineSync.question("Your answer: ")
    return answer
}

// генератор случайного числа от 1 и выше 
const rundomNumbers = (maxNum = 100, minNum = 1) => {

    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

}

// алгоритм Евклида для вычисления НОД
const nodAlgorithm = (num1, num2) =>{
    if(num1 <= 0 || num2 <= 0) {
        return false
    }

    while(num2 !== 0) {  
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}

// создание арифметического выражения 
const generateProgression = (start, diff, maxLength, hidenindex) => {
    const result = [];

    for (let i = 0; i <= maxLength; i++ ) { 
        if(i === hidenindex){
            result.push('..')
        }else {
            result.push(start + (i * diff))
        }
    }
    return result
}

// проверка простое число или нет
const primeCheaker = (number) => {
    const squareRoot = Math.floor(Math.sqrt(number))
    if (number < 2) {
        return "no"
    } else if (number === 2) {
        return "yes"
    } else if (number % 2 === 0) {
        return "no"
    }

    for(let i = 2; i <= squareRoot; i++){
        if (number % i === 0) {
            return "no"
        }
    }
    return "yes"
}   

// currentElement = start + index * step
export {checkAnsver, userAnsver, rundomNumbers, greetingsUser, nodAlgorithm, generateProgression,primeCheaker};