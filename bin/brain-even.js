#!/usr/bin/env node
import readlineSync from "readline-sync";


//узнаем имя пользователя
const playEvenbrain = () => {
    console.log("Welcome to the Brain Games !");
    const name = readlineSync.question('May I have your name? ');
    console.log(`hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    for (let vinePoints = 0; vinePoints < 3; vinePoints++) { 

        //задаем случаное число от 1 до 100
        let number = Math.floor(Math.random() * 100 + 1)

        //выводм число в консоль и ждем ответа от пользователя
        console.log(`Question: ${number}`)
        const answer = readlineSync.question("Your answer:")

        //проверка целое число или нет
        const correctAnsver = number % 2 === 0 ? "yes": "no"

        //сравниваем нашу проверку и ответ пользователя
        if (answer === correctAnsver) {
            console.log("Correct!")
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnsver}. Let's try again, ${name}`)
            return 
        }
        if (vinePoints === 2) {
            console.log(`Congratulations, ${name}!`);
        }
    }
}

playEvenbrain()