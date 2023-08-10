import {Link} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'

const NavBar = () =>  {
return(
    <BrowserRouter>
        <Routes>
            <nav>
            <Link to='allplayers'>AllPlayers</Link>
            <Link to='newplayerform'>NewPlayerForm</Link>
            </nav>
        </Routes>
   </BrowserRouter>
)
}

export default NavBar