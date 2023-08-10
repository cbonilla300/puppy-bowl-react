const FetchAllPlayers = async () => {
    try {
        console.log('fetching players')
    const allPlayers = await fetch(`${APIURL}/POST/${cohortName}/players`)
    const  result = allPlayers.json()
    return result
    
}catch (err) {

}
    
       
}

export default FetchAllPlayers