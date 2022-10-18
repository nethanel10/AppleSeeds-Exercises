 let textinput=document.querySelector('.text')
 const btnfunc=()=>{
    
    textinput.style.fontSize="100px";

    

 }
const btnfunc2=()=>{
    
     textinput.style.fontSize="6px";
}
const button=document.querySelector('.btn1')
 const button2=document.querySelector('.btn2')


button.addEventListener('click',btnfunc)
button2.addEventListener('click',btnfunc2)

