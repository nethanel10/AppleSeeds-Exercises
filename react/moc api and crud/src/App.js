import logo from './logo.svg';
import './App.css';
import  React ,{useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [countryarr,setcountryarr]=useState([])
  
  const [inputVal,setInputVal]=useState("")
  const[State,setstate]=useState("")
  const [city,setcity]=useState("")

  useEffect(()=>{
    //*Read
    const fetchData=async()=>{
      try{
const{data}=await axios.get("https://6374a45108104a9c5f84c771.mockapi.io/world")
console.log(data)
setcountryarr(data);
      }
      catch(err){
console.log(err)
      }
    }
    fetchData()
  },[])
  //*Create
  const handleAddTask=async()=>{
    if(inputVal.trim() ){
      try{
const{data}=await axios.post("https://6374a45108104a9c5f84c771.mockapi.io/world",{
  country:inputVal,
  State:State,
  popultaionabove2000000:false,
city:city

});

setcountryarr((prev)=>[...prev,data])
setInputVal("")
setcity("")
setstate("")


}catch(err){
    console.log(err)
  }
    }
    

  }
  //*Update
  const handelupdtae=async(id,oldpopultaionabove2000000)=>{
    try{
      const {data}=await axios.put(`https://6374a45108104a9c5f84c771.mockapi.io/world/${id}`,{
popultaionabove2000000:!oldpopultaionabove2000000,
      });
      setcountryarr((prev)=>{
        return prev.map((c)=>{
if(c.id!==id){
return c;
}else{
  return data;
}

        });

      });

    }catch(err){
      console.log(err)
    }
    
  }
  //*Delete
  const handeldelete=async(id)=>{
    try{
const{data}=await axios.delete(`https://6374a45108104a9c5f84c771.mockapi.io/world/${id}`)
console.log(data);
setcountryarr((prevstate1)=>
  prevstate1.filter((co)=>{
    return co.id!==data.id
  })
)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="App">
      <input
      value={inputVal}
      placeholder="country"
      onChange={({target:{value}})=>setInputVal(value)}
      />
      <input
      value={State}
      placeholder="state"
      onChange={({target:{value}})=>setstate(value)}

      />
      <input
      value={city}
      placeholder="city"
      onChange={({target:{value}})=>setcity(value)}

      />
      <button onClick={handleAddTask}>Add country</button>
            {setcountryarr.length && (
        <div className='countrycontainer'>
          {countryarr.map(({ country, id,popultaionabove2000000,State,city}) => (
            <div className='country' key={id}>
              <h3
              onClick={()=>{
                handelupdtae(id,popultaionabove2000000)
              }}
              >
                {country} - {popultaionabove2000000 ? 'V' : 'X'}
              </h3>
              <h3
              >
            {State}
              </h3>
              <h3>
                {city}
              </h3>
              <button 
              onClick={()=>{
                handeldelete(id)
              }}
              >delete</button>
            </div>
          ))}
        </div>
      )}

     </div>
    
    

  );
}

export default App;
