const NewPlayer = async () => {

        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [error, setError] = useState(null)

try {
        const newPlayer = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-pt-c/players');
        const newPlayerresult  = newPlayer.json;
        return newPlayerresult;

} catch (err) {
        console.error('Oops, something went wrong with adding that player!', err );
        
}        
}
return(
 <>
 
 <h2>Sign Up!</h2>
 <form>
        <label></label>
 </form>
 </>  
 )     
        
   

export default NewPlayer