const testNum = (num) => new Promise ((resolve, reject) => {
  if (num > 50) {
    resolve('greater than fifty')
  } else {
    reject('less than fifty')
  }
})

testNum(2)
    .then(function(value) {
  console.log(value)
})
.catch(function(error) {
  console.log(error)
})
