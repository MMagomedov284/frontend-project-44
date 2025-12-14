#!/usr/bin/env node

import { checkAnsver, userAnsver, rundomNumbers, greetingsUser } from "../src/index.js";

const playCalculatorBrain = () => {
    console.log("brain-calc")

    let userName = greetingsUser()

    for (let vinePoints = 0; vinePoints < 3; vinePoints++) {
        //создаем 2 рандомных числа 
        const num1 = rundomNumbers(50);
        const num2 = rundomNumbers(10);

        //создаем масив с 3 выражениями 
        const operations = ["-", "+", "*"]

        //создаем генератор рандомного выражения из масива 
        const randomIndex = Math.floor(Math.random() * operations.length);
        const randomOperation = operations[randomIndex]

        //спрашиваем у пользователя ответ на операцию
        const expression = `${num1} ${randomOperation} ${num2}`;
        const Ansver = Number(userAnsver(expression));

        //вычисляем правильный ответ

        let correctAnsver = 0
        switch (randomOperation) {
            case "-":
                correctAnsver = num1 - num2
                break
            case "+":
                correctAnsver = num1 + num2
                break
            case "*":
                correctAnsver = num1 * num2
                break
            default:
                break
        }

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

playCalculatorBrain()