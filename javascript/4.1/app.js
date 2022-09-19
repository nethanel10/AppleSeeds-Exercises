
const prompt = require("prompt-sync")();
let num = parseInt(prompt("How many siblings do you have: "))
if(num===1){
    console.log ("1 sib")
    
}
else if(num>1 ){
    console.log('More than 1 sibling' );
    }
    else if(num===0 || ""){
        console.log("no siblings");
    }
    //6. the terminal input the num but dont present message 
//8. if we add parse int to num so the terminal display messagees because parse int parse the type of var from sring to int and so the type of var is equal to type of num.
