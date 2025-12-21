#!/usr/bin/env node

import { greetingsUser, userAnsver } from "../src/cli.js";
import { generateProgression } from "../src/games/progression.js";
import { checkAnsver, rundomNumbers } from "../src/index.js";

const brainProgression = () => {

    let userName = greetingsUser("What number is missing in the progression?");

    for (let vinePoints = 0; vinePoints < 3; vinePoints++) {

        // создаем орифметическое выражение 
        const start = rundomNumbers(50)
        const diff = rundomNumbers(5)
        const length = rundomNumbers(10, 5)
        const hidenindex = rundomNumbers(length)
        const progression = generateProgression(start,diff,length,hidenindex)

        const question = progression.join(" ")

        // сравнивание ответа пользователя и правильного ответа
        const Ansver = Number(userAnsver(String(question)))
        const correctAnsver = start + (hidenindex * diff)
        let correct = checkAnsver(Ansver, correctAnsver, userName)

        if (correct === false){
            break
        }        
        if (vinePoints === 2) {
            console.log(`Congratulations, ${userName}!`);
        }
    }

}

brainProgression()