import { getRandomNumber } from '../index.js'

export const gameRules = 'What is the result of the expression?'

export const generateRound = () => {
  const num1 = getRandomNumber(1, 10)
  const num2 = getRandomNumber(1, 10)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumber(0, 2)]

  let answer
  switch (operator) {
    case '+':
      answer = num1 + num2
      break
    case '-':
      answer = num1 - num2
      break
    case '*':
      answer = num1 * num2
      break
  }

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(answer),
  }
}
