import readlineSync from 'readline-sync';

const greetingsUser = () => {
    console.log("Добро пожаловать на «Игры разума»!");
    const name = readlineSync.question('ваше имя: ');
    console.log(`привет, ${name}!`);
    return name
}

const checkAnsver = (answer, correctAnsver, userName) => {
    if (answer === correctAnsver) {
        console.log("Правильно!")
    } else {
        console.log(`"${answer}" неправильный ответ ;(. Правильный ответ был "${correctAnsver}". Давайте попробуем еще раз, ${userName}`)
        return false
    }
}

const userAnsver = (value) => {
    console.log(`вопрос: ${value}`)
    const answer = readlineSync.question("Ваш ответ: ")
    return answer
}

const rundomNumbers = (value = 100) => {
    return Math.floor(Math.random() * value + 1)
}

export {checkAnsver, userAnsver, rundomNumbers, greetingsUser};