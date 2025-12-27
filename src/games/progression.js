import { getRandomNumber } from '../index.js'

export const gameRules = 'What number is missing in the progression?'

export const generateRound = () => {
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 10)
  const length = 10
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = []
  for (let i = 0; i < length; i++) {
    if (i === hiddenIndex) {
      progression.push('..')
    }
    else {
      progression.push(start + i * step)
    }
  }

  return {
    question: progression.join(' '),
    correctAnswer: String(start + hiddenIndex * step),
  }
}
