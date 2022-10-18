// 1.The user is allowed to type the values manually. After
// each value is inserted, the next input will be focused.
const inputs=document.querySelector('input[type="text"]');
const form=document.querySelector('form')
const handleinput=(event)=>{
   const input= event.target;
   if(input.value.length>0&&!Number(input.value)){
console.log('invaild');
return;
   }

   if(input.nextElementSibling&&input.value.length>0){
    input.nextElementSibling.focus()

   }
   const allValuesFull=[...inputs].every((input)=>input.value)
   if(allValuesFull){
    form.submit();
   }
};
inputs.forEach((e) => {
    e.addEventListener('keyup',handleinput);

});
console.log(inputs);

// 2. The user is allowed to paste the verification code.
const handlepast=(event)=>{
    const paste=event.clipboardData.getdata('text')
    console.log(paste);
    inputs.forEach((input,index)=>{
input.value=paste[index]|| '';
    });
}
inputs[0].addEventListener('paste',handlepast)
// 3. An extra challenge will be to auto submit the form once all
// inputs all populated.