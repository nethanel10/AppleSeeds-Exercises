
const capitalize = (words) => 
  new Promise ((resolve, reject) => {
  if (words.every(word => typeof word === 'string')){
      resolve(words.map(word => word.toUpperCase()))
      } else {
      reject(('the array not contain string'))
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
  
let names=["nethnel"]
capitalize(names)
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
