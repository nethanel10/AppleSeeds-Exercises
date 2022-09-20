
const obj = {name: "nethanel", age: 21}

// 1
const arr1 = new Array(100).fill(obj);
console.log(arr1)
// 2
let arr2 = []
arr2 = Array.from(Array(100).keys())

console.log(arr2)
// 3

const entries = Object.values(obj)
console.log(entries.toString())
//4
const arr3 = ["yo", "hello", "here"]

const arrIntoObj = Object.assign({}, arr3)
console.log(arrIntoObj)

//5
if(Array.isArray(arr3)) console.log("5: arr3 is an array.")

//6a
const copiedArr = [...arr1]
console.log(copiedArr)

//6b
const copiedArr2 = arr1
console.log(copiedArr2)