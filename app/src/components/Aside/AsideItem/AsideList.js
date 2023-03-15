
import AsideItem from "./AsideItem"
import './AsideList.css'
const AsideList = props => {
    return <div className='aside-list'>
        <AsideItem
            tilte='News today'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dicta fuga. Praesentium, ea
                ess'
        />
        <AsideItem
            tilte='News today'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dicta fuga. Praesentium, ea
                ess'
        />
        <AsideItem
            tilte='News today'
            desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, dicta fuga. Praesentium, ea
            ess'
        />

    </div>
}

export default AsideList