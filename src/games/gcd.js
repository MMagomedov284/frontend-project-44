import { getRandomNumber } from '../index.js'

export const gameRules = 'Find the greatest common divisor of given numbers.'

export const generateRound = () => {
  const a = getRandomNumber(1, 50)
  const b = getRandomNumber(1, 50)

  // Функция НОД
  const gcd = (x, y) => {
    while (y !== 0) {
      const temp = y
      y = x % y
      x = temp
    }
    return x
  }

  return {
    question: `${a} ${b}`,
    correctAnswer: String(gcd(a, b)),
  }
}
