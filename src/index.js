// проверка коректности ответа от пользователя + информивания пользователя если ответ не верный
const checkAnsver = (answer, correctAnsver, userName) => {
    if (answer === correctAnsver) {
        console.log("Correct!")
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnsver}'.`);
        console.log(`Let's try again, ${userName}!`);
        return false
    }
}

// генератор случайного числа от 1 и выше 
const rundomNumbers = (maxNum = 100, minNum = 1) => {

    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

}


export {checkAnsver, rundomNumbers};