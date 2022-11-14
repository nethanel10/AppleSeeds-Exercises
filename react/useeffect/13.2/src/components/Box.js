import {useEffect}from 'react'
function Box({width,height,color,setIsshown}){
useEffect(()=>{
    setTimeout(() => {
        setIsshown(false)
    }, 4000);
})
return(
    <div 
    className='box'
    style={{
        width:`${width}` ,
        height:`${height}`,
        backgroundColor:`${color}`
    }}
    >
    </div>
)
}
export default Box