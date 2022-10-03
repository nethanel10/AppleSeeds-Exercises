//1
(function immediateA(a) {
    return (function immediateB(b) {//(function immediateB(1)
    console.log(a);//a=0
    })(1);
    })(0);//a=0
    //2
    let count = 0;
(function immediate() {
if (count === 0) {
let count = 1;
console.log(count);//1
}
console.log(count);//0
})();
//3
var module = (function () {
    var foo = 'foo'
    function addToFoo (bam) {
    foo = bam;
    return foo;//'foo'
    }
    var publicInterface = {
    bar: function () {
    return 'bar';//function
    },
    bam: function () {
    return addToFoo('bam')//bam
    }
    }
    return publicInterface//function
    })()
    console.log(module.bar())//bar
    console.log(module.bam())//bam
    //4
    function createIncrement() {
        let count = 0;
        function increment() {
        count++;// count=1 ?
        }
        let message = `Count is ${count}`;//count is 0 or 1
        function log() {
        console.log(message);//count is 0 or 1
        }
        return [increment, log];//1,count is 0 or 1
        }
        const [increment, log] = createIncrement();//function 
        increment();//0
        increment();//1
        increment();//2
        log();//count is 0 
//5
var x = 10;
console.log(x);//10
if (true) {
(function() {
var x = 20;
console.log(x);//20
})();
}
console.log(x);//10
//6
var x = 10;
console.log(x);//10
function test(){
var x = 20;
console.log(x);//20
if (x > 10) {//20>10
let x = 30;
console.log(x);//30 
}
console.log(x);//20
}
test();//20
console.log(x);//10
//7
var x;
x = 10;
function test(){
var x;
if (x > 20) {
x = 50;
}
console.log(x);//10
}
test();
//8
function test(){
    var x, y;
    if (false) {
    x = 50;
    }
    console.log(x);//undifend
    console.log(y);//undefind
    y = 100;
    console.log(y)//100
    }
    test();//100
//9
function test(){
    foo();//foo
    bar();//error becase function canntot equal to var 
    function foo(){
    console.log('foo');
    }
    var bar = function() {
    console.log('bar');
    }
    }
    test();

