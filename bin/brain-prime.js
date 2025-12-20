#!/usr/bin/env node

import { greetingsUser, userAnsver } from "../src/cli.js";
import { primeCheaker } from "../src/games/prime.js"
import { checkAnsver, rundomNumbers } from "../src/index.js"

const brainPrime = () => {
    const userName = greetingsUser('Answer "yes" if given number is prime. Otherwise answer "no".')

    for(let vinePoints = 0; vinePoints < 3; vinePoints++) {

        const number = rundomNumbers()

        const Ansver = userAnsver(number)
        const correctAnsver = primeCheaker(number)

        let correct = checkAnsver(Ansver,correctAnsver,userName)

        if (correct === false){
            break
        }        
        if (vinePoints === 2) {
            console.log(`Congratulations, ${userName}!`);
        }       
    }
}

brainPrime()