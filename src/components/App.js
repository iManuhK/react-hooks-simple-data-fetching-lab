// create your App component here
import React,{useEffect,useState} from 'react'

function App() {
    const [dog,setDogs] = useState(null)
useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>setDogs(data.message))
},[])

if(!dog){
    return <p>Loading...</p>
}
  return (<div>
<img src={dog} alt="A Random Dog" />
  </div>
    )
}

export default App