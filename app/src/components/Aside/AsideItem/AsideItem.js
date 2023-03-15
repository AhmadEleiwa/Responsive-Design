import Subtitle from "../../Subtitle/Subtitle"
import Title from "../../Title/Title"

import './AsideItem.css'

const AsideItem = props => {
    return <div className='aside-item'>
        <Title>{props.title}</Title>
        <img src='https://picsum.photos/300/200' />
        <Subtitle size ='1em'>
           {props.desc}
        </Subtitle>
    </div>
}

export default AsideItem