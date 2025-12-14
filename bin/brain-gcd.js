#!/usr/bin/env node

import { checkAnsver, userAnsver, rundomNumbers, greetingsUser,nodAlgorithm } from "../src/index.js";

const brainGcd = () => {

    let userName = greetingsUser()
    for (let vinePoints = 0; vinePoints < 3; vinePoints++) {
        //создаем 2 рандомных числа 
        const num1 = rundomNumbers(80);
        const num2 = rundomNumbers(20);

        //спрашиваем у пользователя ответ на операцию
        const expression = `${num1} ${num2}`;
        const Ansver = Number(userAnsver(expression));

        //вычисляем правильный ответ

        let correctAnsver = nodAlgorithm(num1, num2)

        //сравниваем ответы
        let correct = checkAnsver(Ansver,correctAnsver,userName);

        if (correct === false) {
            break
        }
        
        if (vinePoints === 2) {
            console.log(`поздравляю, ${userName}!`);
        }

    }
}

brainGcd()