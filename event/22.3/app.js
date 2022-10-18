var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice);
    const comp = document.querySelector('.computerguess')
const key1=document.querySelector('.key')
const input=document.querySelector('#sample')

function choiseuser(e){
    
    var usergusess=e.key
    if(charRepeats(input.value)){//2
        alert('he already guessed the letter.Constraints');
    }
    if(    !Boolean(usergusess.match(/[a-zA-Z]/ ))&&input.value!=="" ){
        alert("is not aloweed")
        } 
        

    
if(usergusess===computerChoice){
logKey()
confirm("start again?")
}
else{
    comp.textContent="nope,worng character",comp.style.color="red"//1
}
}

  function logKey() {

  comp.textContent ="right",comp.style.color="green";

  key1.textContent=computerChoice;

  

  }
document.addEventListener('keypress',choiseuser)

var charRepeats = function(str) {//2
    let bool;
    for (var i=0; i<str.length; i++) {
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        bool=true // repeats
      }
      else{
        bool=false;
      }
return bool
    }
    

}
  
console.log(charRepeats("aba"));
