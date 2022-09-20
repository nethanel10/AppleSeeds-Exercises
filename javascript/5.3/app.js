function passwordvalidation(password){//1
    if(password.length>7){
        return "Strong";
    }
    else{
        return "week";
    }
}

function passwordvalidation1(password1){//2
    
    password1.length>7 ? console.log("Strong") : console.log("Weak");

}
console.log(passwordvalidation("1234567"));
passwordvalidation1("1234567");

function uselogical(password2,password1){//3

    password2.length>7 && password1.length>7? console.log("good") : console.log("bad")
}
uselogical("12345678","1234567");
const newLocal = "bad";
//4
function advancedpasswordvalidation(password12){
      password12= password12.length > 7 && password12.match(/[A-Z]/) ? console.log("very Strong") : password12.length > 7  ?  console.log("strong") : console.log("week") ;
 
}
advancedpasswordvalidation("12345678")