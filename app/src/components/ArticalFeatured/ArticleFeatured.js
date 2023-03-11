import Description from "../Description/Description"
import Subtitle from "../Subtitle/Subtitle"
import Title from "../Title/Title"
import Button from "../Button/Button"
import './ArticleFeatured.css'
const ArticalFeatured = props => {
    return <div className={`article ${props.recent ? 'recent' : 'main-article'}`}>

        <div>
            <img src={props.imgSrc} alt='s' />
            <Subtitle>{props.subtitle}</Subtitle>
        </div>
        <div>
            <Title>{props.title}</Title>
            <Description>
                {props.desc}
            </Description>
            <Button>CONTINUE READING</Button>
        </div>
    </div>
}

export default ArticalFeatured