// создание арифметического выражения
export const generateProgression = (start, diff, maxLength, hidenindex) => {
  const result = []

  for (let i = 0; i <= maxLength; i++) {
    if (i === hidenindex) {
      result.push('..')
    }
    else {
      result.push(start + (i * diff))
    }
  }
  return result
}
