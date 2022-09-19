function score(numberscore){
    const prompt = require("prompt-sync")();
    numberscore=prompt("enter score")


    if(numberscore>0&&numberscore<64){
        return "F";
    }
    else if(numberscore>65&numberscore<69){
        return "D";
    }
    else if(numberscore>70&numberscore<79){
        return "C";
    }
    else if(numberscore>80&numberscore<89){
        return "B";
    }
    else if(numberscore>90&numberscore<100){
        return "A";
    }




}
console.log(score(10));