// const form=document.querySelector('#fill')
let firstname=document.querySelector('#firstname');

const age=document.querySelector('#age');
 const email=document.querySelector('#email');
// // const submit=document.querySelector('#btn');
// form.addEventListener('submit',function(e){
//    console.log();('firstname',firstname.value);
//     e.preventDefault()
// })
function clicked(e)
{
    if(confirm(` are you sure 
    firstname:${firstname.value} 
    age:${age.value} 
    email:${email.value}`)) {
        e.preventDefault();
        alert("congratulations you successfully sent this form")
    }
    if(!confirm){
        e.preventDefault();
    

    }
}
