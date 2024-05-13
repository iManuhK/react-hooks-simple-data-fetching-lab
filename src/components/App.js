// create your App component here
import React,{useEffect,useState} from 'react'

function App() {
    const [dog,setDogs] = useState([])
useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>setDogs(data))
},[])

  return (<div>
{!dog ? <p>Loading...</p> : <img src={dog.message} alt="A Random Dog" /> }
  </div>
    )
}

export default App