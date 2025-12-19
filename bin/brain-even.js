#!/usr/bin/env node
import { checkAnsver, userAnsver, rundomNumbers, greetingsUser } from "../src/index.js";

const playEvenbrain = () => {

    //узнаем имя пользователя
    let userName = greetingsUser()
    console.log('Answer "yes" if the number is even, otherwise answer "no"')

    for (let vinePoints = 0; vinePoints < 3; vinePoints++) { 

        //задаем случаное число от 1 до 100
        let number = rundomNumbers()

        //выводим число в консоль и ждем ответа от пользователя
        const answer = userAnsver(number)

        //проверка целое число или нет
        const correctAnsver = number % 2 === 0 ? "yes": "no"

        //сравниваем нашу проверку и ответ пользователя
        let correct = checkAnsver(answer,correctAnsver,userName);

        if (correct === false) {
            break
        }
        
        if (vinePoints === 2) {
            console.log(`Congratulations, ${userName}!`);
        }
    }
}

playEvenbrain()