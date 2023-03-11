import './Subtitle.css'

const Subtitle = props =>{
    return <h2 className='subtitle'>
        {props.children}
    </h2>
}

export default Subtitle