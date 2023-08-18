import FetchAllPlayers from './ajaxHelper'
import { useState, useEffect } from 'react'

const AllPlayers = () => {
const [players, setPlayers] = useState([])

useEffect(() => {
  const AsyncFetch = async () => {
    const playerList = await FetchAllPlayers()
    console.log(playerList)
  setPlayers(playerList)
  }
     AsyncFetch()
     
     
  
},[])
return(
  <ul>{players.map((player)=> {
    return <li>{player.name}</li>
    
  })}</ul>
)
}



export default AllPlayers






