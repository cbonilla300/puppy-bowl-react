import {Routes,Route,Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import AllPlayers from './AllPlayers'
import NewPlayer from './NewPlayerForm'

const NavBar = () =>  {
return(
    <BrowserRouter>
        <div>
            <Link to='allplayers'>AllPlayers</Link>
            <Link to='newplayerform'>NewPlayerForm</Link>
        </div>


        <Routes>
            <Route path='allplayers' element={<AllPlayers/>}/>
            <Route path='newplayerform' element={<NewPlayer/>}/>
        </Routes>        
              
   </BrowserRouter>
)
}


export default NavBar