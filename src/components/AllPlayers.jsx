import FetchAllPlayers from './ajaxHelpers'
import { useState, useEffect } from 'react'

const AllPlayers = () => {

const [players, setPlayers] = useState([])
useEffect(()=>{

     setPlayers(FetchAllPlayers())
     
     
  
},[])
  return (
    <div>hello world</div>
  )

}


export default AllPlayers






