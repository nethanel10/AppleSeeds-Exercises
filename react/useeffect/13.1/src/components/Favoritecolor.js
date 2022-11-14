import {useState,useEffect} from 'react'
function Color(){
const[favoritecolor,Setfavoritecolor]=useState("green")
useEffect(()=>{
    setTimeout(() => {
        Setfavoritecolor("red")
    }, 1000);
},[favoritecolor])//in the first time I want to present the state of favorite color
return(
    <>
    <h1>my favorite color is {favoritecolor}</h1>
   
    </>

)
}
export default Color