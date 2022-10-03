//1
var x = 10;
console.log(x);//10
if (true) {
var x = 20;
console.log(x);//20
}
console.log(x);//20
//2
var x = 10;
console.log(x);//10
if (true) {
(function() {
var x = 20;
console.log(x);//20
})();
}
console.log(x);//10
//3
var x = 10;
console.log(x);//10
function test(){
var x = 20;
console.log(x);//20
if (x > 10) {//true
let x = 30;
console.log(x);//30
}
console.log(x);//20
}
test();//20
console.log(x);//10
//4
var x;
x = 10;//x=10
function test(){
var x;
if (x > 20) {
x = 50;//
}
//console.log(x)
}
//test();
//5
 function test(){
    var x, y;
   if (false) {
   x = 50;
   }
   console.log(x);//undefind
   console.log(y);//undefimd
    y = 100;
   console.log(y);//100
    }
    test();
    //6
    function test(){
        foo();//print foo 
        bar();//error
        // Function defiened
        // using function declaration
        function foo(){
        console.log('foo');
        }
        // Function defined
        // using function expression
        var bar = function() {
        console.log('bar');
        }
        }
        test();
    
