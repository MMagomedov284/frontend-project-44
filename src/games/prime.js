import { getRandomNumber } from '../index.js'

export const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) return false
  if (number === 2) return true
  if (number % 2 === 0) return false

  const limit = Math.floor(Math.sqrt(number))
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) return false
  }
  return true
}

export const generateRound = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question: number, correctAnswer }
}
