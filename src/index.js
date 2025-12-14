import readlineSync from 'readline-sync';

// Узнаем имя пользователя 
const greetingsUser = () => {
    console.log("Добро пожаловать на «Игры разума»!");
    const name = readlineSync.question('ваше имя: ');
    console.log(`привет, ${name}!`);
    return name
}

// проверка коректности ответа от пользователя + информивания пользователя если ответ не верный
const checkAnsver = (answer, correctAnsver, userName) => {
    if (answer === correctAnsver) {
        console.log("Правильно!")
    } else {
        console.log(`"${answer}" неправильный ответ ;(. Правильный ответ был "${correctAnsver}". Давайте попробуем еще раз, ${userName}`)
        return false
    }
}

//вывод вопроса и получение на него ответа
const userAnsver = (value) => {
    console.log(`вопрос: ${value}`)
    const answer = readlineSync.question("Ваш ответ: ")
    return answer
}

// генератор случайного числа от 1 и выше 
const rundomNumbers = (value = 100) => {
    return Math.floor(Math.random() * value + 1)
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

export {checkAnsver, userAnsver, rundomNumbers, greetingsUser, nodAlgorithm};