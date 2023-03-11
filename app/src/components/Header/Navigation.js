import Navlink from "../Navlink/Navlink"
import './Navigation.css'

const Navigation = props =>{
    return <nav>
        <ul>
            <li><Navlink>HOME</Navlink></li>
            <li><Navlink>ABOUT ME</Navlink></li>
            <li><Navlink>RECENT POSTS</Navlink></li>
        </ul>
    </nav>
}

export default Navigation
