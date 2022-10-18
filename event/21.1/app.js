
  const button =document.querySelector('.btn')
  button.addEventListener("click", function() {
    if (document.querySelector(".text").value >18) {
      console.log("you can drink appear");
    } else if(document.querySelector(".text").value <18){
      console.log("youre too young");
    }
  })
