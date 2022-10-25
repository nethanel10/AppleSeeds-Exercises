document.getElementById('btn').addEventListener("click",fetchData)
function fetchData(){
   let body=document.querySelector('body')
   const res= fetch("https://api.jokes.one/jod")
   .then((data)=>{
console.log(data);
return data.json()
   })
   .then((data)=>{
    const h1=document.createElement('h1')
    h1.textContent=data.contents.jokes[0].joke.title
    const h2=document.createElement('h2')
  h2.textContent=data.contents.jokes[0].joke.text
     body.appendChild(h1)
     body.appendChild(h2)
   })
   .catch((e)=>{
console.log(e)
   })
}