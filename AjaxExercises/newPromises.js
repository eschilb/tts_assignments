let strings = ['beep', 'boop', 'alive', 'not a robot']

const makeAllCaps = (words) =>
  new Promise ((resolve, reject) => {
    if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
    } else {
      reject(Error('At least one element was not a string!'))
    }
  })

const sortWords = (words) => {
  return words.sort((a, b) => {
    if (a > b){
      return 1
    } else {
      return -1
    }
  })
}

makeAllCaps(strings)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
