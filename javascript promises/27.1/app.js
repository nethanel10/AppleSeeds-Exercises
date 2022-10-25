const greaterthan10=(number)=>{
return new Promise((reslove,reject)=>{
if(number<10){
    reject()
}
else{
    reslove()
}

})

}
greaterthan10(3)
.then(()=>{
 console.log("good");
})
.catch(()=>{
     console.log("no");
})
