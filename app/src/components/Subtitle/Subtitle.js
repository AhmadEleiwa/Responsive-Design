import './Subtitle.css'

const Subtitle = props =>{
    return <h2 className='subtitle' style={{fontSize:props.size ? props.size: '1.2em' }}>
        {props.children}
    </h2>
}

export default Subtitle