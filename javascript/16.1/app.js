function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
    }
    
    funcA();//2,undifind
//2
    var fullName = 'John Doe';
    var obj = {
    fullName: 'Colin Ihrig',
    prop: {
    fullName: 'Aurelio De Rosa',
    getFullName: function () {
    return this.fullName;//Aurelio De Rosa
    }
    }
    };
    console.log(obj.prop.getFullName());//Aurelio De Rosa
    var test = obj.prop.getFullName;
    console.log(test());//no enter to func print 
//3
function funcB() {
    let a = b = 0;//a=0 b=0
    a++;//a=1
    return a;//1
    }
    funcB();
    console.log(typeof a);//a have not a type
    console.log(typeof b);//b is global therefor typeof is num 
    //4
    function funcC() {
        console.log("1");//1
        }
        funcC();//1
        function funcC() {
        console.log("2");//2
        }
        funcC();//2
        //5
        function funcD1() {
            d = 1;
            }
            funcD1();//1
            console.log(d);//
            function funcD2() {
            var e = 1;
            }
            funcD2();//1
            //console.log(e);//undifiend/error
            //6
            function funcE() {
                console.log("Value of f in local scope: ", f);//undifiend
                }
                console.log("Value of f in global scope: ", f);//1
                var f = 1;
                funcE();//1