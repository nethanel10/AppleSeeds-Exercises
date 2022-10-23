//1
function sayhi(){
    console.log("hi");
    console.log(this);//this point to global object called the window because function is not an object 
    
}
sayhi()
//2
const myObj = {
    name: "Timmy",
    greet ()  {
    console.log(`Hello ${this.name}`);//undefind since its an arrow function the function after repair


    },
    };
    myObj.greet();
//3
    const myFuncDec = function () {  //this point to global object called the window in browser  because the arrow function is not an object 
        console.log(this);
        };
myFuncDec()
//4
const myFuncArrow = () => {
    console.log(this);
    };
    myFuncArrow();///error
//5
    document.querySelector(".element").addEventListener("click",() => {
        console.log(this);//error before repair to repear we add a button that is class element and add in js whene the function called 
        });