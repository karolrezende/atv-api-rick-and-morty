import './App.css'
import { api } from './api'
import { useEffect, useState } from 'react'
import Body from './Body/Body'
function App() {
  const [char, setChar] = useState([])
  useEffect(()=>{
    async function teste (){
      try{
        const response = await api.get()
        setChar(response.data.results)
      }
      catch(error){
        console.log(error);
      }
    }teste()
    
  },[])
  return (
    <Body charList={char}/>
  )
}

export default App
