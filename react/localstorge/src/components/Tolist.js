import {useEffect, useState} from 'react'
function TodoList(){
    const[inputvalue,setinputvalue]=useState("")
    const[todo,settodo]=useState([])
    const handleSubmit=(e)=>{
        e.preventDefault()
        settodo((prev)=>[...prev,inputvalue])
    }
    const handelinput=(event)=>{
        //  if(event.target.value===""){
        //     return "";
        //  }
       setinputvalue(event.target.value)
    }

    
    return(
        
            <form   onSubmit={handleSubmit} className='helo' >
            <h1>TODO'S</h1>
            <h2>Local storge with CRUD APP</h2>
            <h3>Curud create Read update delet</h3>
            
                <h2>add todo </h2>
            <input type="text" value={inputvalue} onChange={handelinput}  className="input2" />
            <button className='btn'>add</button>
            {
            <ul>
            {todo.map((Todoinput,id)=>{
                
                return (
                    <li  key={id} id={id} >{`${Todoinput}` }
                    <button className='delete' >delete</button>
                    </li>

                )


                

            })}
        </ul>

            }

            
            
            

            </form>
        
    )
}
export default TodoList