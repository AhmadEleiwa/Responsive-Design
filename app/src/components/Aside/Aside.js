import './Aside.css'
import AsideItem from './AsideItem/AsideItem'
import AsideList from './AsideItem/AsideList'
const Aside = props => {
    return <aside>
        <AsideItem title='About me' desc="
                    This stage is beneath my talent, but I shall elevate it.
                    " />
        <AsideList />
    </aside>
}


export default Aside