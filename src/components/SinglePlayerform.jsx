   const DeletePlayer = async () => {
    try {
    const deleteResponse = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-pt-c/players/1')
    const deleteResult = await deleteResponse.json()
    return deleteResult
    

}catch (err) {
    return
}
    
   }
      
    <>
    <div className="delete-button">
        <button onClick={DeletePlayer}>Delete PLayer</button>
    </div>
    
    
    </>
        
        


    
export default DeletePlayer
























































