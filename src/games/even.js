import { getRandomNumber } from '../index.js'

export const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'

export const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no'
  return { question: number, correctAnswer }
}
