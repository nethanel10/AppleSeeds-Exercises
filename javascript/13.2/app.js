//a1
const foods = ["falafel", "sabich", "hummus","pizza with extra pineapple"];
const descArr = foods.sort().reverse();
// console.log(descArr); 
//check the num in askii table
// abc="falafel".charCodeAt(0)
// abcd="sabich".charCodeAt(0);
// abcde="hummus".charCodeAt(0);
// abcdef="pizza with extra pineapple".charCodeAt(0)
// console.log(abc)
// console.log(abcd)
// console.log(abcde)
// console.log(abcdef)
//a2
const ascArr = foods.sort();
// console.log(ascArr); 
//b1
const foodsWithUpperCase = [ "falafel","Sabich","hummus","pizza with extra pineapple"]
const descArr1withuppercase = foodsWithUpperCase.sort().reverse();
// console.log(descArr1withuppercase); 
//b2
const ascArr1withuppercase = foodsWithUpperCase.sort();
// console.log(ascArr1withuppercase); 
//c
function sortByLength (array) {
    return array.sort((x,y) => y.length - x.length);
 }
 console.log(sortByLength(foods))
 





