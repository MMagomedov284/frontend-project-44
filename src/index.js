import readlineSync from 'readline-sync'

export const playGame = (gameRules, generateRound) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(gameRules)

  for (let i = 0; i < 3; i++) {
    const { question, correctAnswer } = generateRound()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
