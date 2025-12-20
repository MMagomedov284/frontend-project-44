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

// currentElement = start + index * step
export {checkAnsver, userAnsver, rundomNumbers, greetingsUser};