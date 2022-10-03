var b = 1;
function someFunction(number) {//number=9
function otherFunction(input) {//input=undefind
return b;//b=1
}
b = 5;
return otherFunction;//b=5
}
var firstResult = someFunction(9);//print back the inner function
var result = firstResult(2);//when calling to function we get value 5 
//b=5 is global varuble;
//2
var a = 1;
function b2() {
a = 10;
return;//a=10
function a() { }
}
b2();//10
console.log(a);//a=1
//b2 > gets back the value of a=10 but nothing is does with it or stared anywhere
//the console.log(a) logs the nearest a var available which is the a=1 on to the begining
//3
let i;
for (i = 0; i < 3; i++) {
const log = () => {
console.log(i);//3
}
setTimeout(log, 100);//3,100
}