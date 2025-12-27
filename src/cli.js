import readlineSync from 'readline-sync'

export const userName = () => {
  let name
  console.log('Welcome to the Brain Games!')
  name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)

  return String(name)
}
