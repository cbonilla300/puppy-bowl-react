import puppyList from "../API";


const cohortName = '2302-acc-et-pt-c';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`

const FetchAllPlayers = async () => {

    try {
       
        console.log(`${APIURL}/players`)
        console.log('fetching players')
    const allPlayers = await fetch(`${APIURL}/players`)
    const  result = await allPlayers.json()
    return result.data.players
    
    
    
}catch (err) {

}
    
       
}

export default FetchAllPlayers