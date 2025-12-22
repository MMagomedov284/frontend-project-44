// проверка простое число или нет
export const primeCheaker = (number) => {
  const squareRoot = Math.floor(Math.sqrt(number))
  if (number < 2) {
    return 'no'
  }
  else if (number === 2) {
    return 'yes'
  }
  else if (number % 2 === 0) {
    return 'no'
  }

  for (let i = 2; i <= squareRoot; i++) {
    if (number % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}
