   const DeletePlayer = () => {
    try {
    const deleteResponse = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-pt-c/players/1')
    const deleteResult = deleteResponse.json
    return deleteResult.
}catch (err) {
    return
}
    
   }
       <>
        
        
        <div className="delete-button">
            <button onClick={DeletePlayer()}>Delete Player</button>
        </div>
        </>
    


    
export default DeletePlayer
























































