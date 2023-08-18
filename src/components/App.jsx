import { useState, useEffect } from 'react'
import './App.css'
import puppyList from './API/index.js'
import AllPlayers from './components/AllPlayers'
import NavBar from './components/NavBar'
import NewPlayer from './components/NewPlayerForm'





function App() {
  const [player, setPlayer] = useState()
return(
  <>
  
 <NavBar/>
 
<AllPlayers/>






</>
)
}

  
 
  
  
  


export default App
