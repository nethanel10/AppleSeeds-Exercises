

 
function arrayMatch(arr1, arr2) {
  var arr = [];  // Array to contain match elements
  var res;
  for(var i=0 ; i<arr1.length ; ++i) {
    for(var j=0 ; j<arr2.length ; ++j) {
      if(arr1[i] == arr2[j]) {    // If element is in both the arrays
        arr.push(arr1[i]);        // Push to arr array
       

        }
      }
      

    }
    return arr;
    

    


  }
   



 
const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Olives", "Pizza",
"Ice-cream", "Hamburgers"];
console.log(arrayMatch(food, food1)); 

 
