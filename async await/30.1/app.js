// text,btn, container 
let input=document.querySelector('input')
let button=document.querySelector('button')
let container=document.querySelector('.container')
const createCard=(userobj)=>{
 let card=document.createElement('div')
card.classList.add('card')
let avatarimg=document.createElement('img')
 let Nameofuser=document.createElement('h2')
let repoes=document.createElement('h3')
container.appendChild(card)
card.appendChild(avatarimg)
card.appendChild(Nameofuser)
card.appendChild(repoes);
}
const fetchData= async (name)=>{
const res=await fetch(`https://api.github.com/users/${name}`)
const data=res.json()
const userobj={avatar:data.avatar_url,name:data.login,numrepoes:data.public_repos}
return userobj;
}