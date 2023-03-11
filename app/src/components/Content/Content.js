import Aside from "../Aside/Aside"
import Main from "../Main/Main"
import './Content.css'
const Content = props =>{
    return <div className='content' >
        <Main/>
        <Aside />
    </div>
}

export default Content