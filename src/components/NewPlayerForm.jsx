import { useState } from "react"
import puppyList from "../API"


const NewPlayer = async (players) => {

        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [error, setError] = useState(null)

        const handleUserName = (event) => {
                setUsername(event.target.value);
        };

        const handlePassword = (event) => {
                setPassword(event.target.value);
        }

        // const handleError = (event.error) => {
        //         setError

        // }
        
        const handleSubmit = (event) => {
                event.preventDefault();
                const newPlayer = {
                        username: username,
                        password: password

                }
        }

        NewPlayer(players)
        setUsername('');
        setPassword('')

try {
        const newPlayer = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-pt-c/players')
        const newPlayerresult  = newPlayer.json;
        return newPlayerresult;

} catch (err) {
        console.error('Oops, something went wrong with adding that player!', err );
        
}       


 

return(  
 <>
 <form onSubmit={handleSubmit}>
        <label>
                username:
                <input type="text" value={username} onChange={handleUserName}/>
        </label>
        <label>
                password:
                <input type="text" value={password} onChange={handlePassword}/>
        </label>
        <button type="submit">New Player</button> 
 </form>
 </>  
     
     ) 
   
} 
export default NewPlayer