import ArticalFeatured from "../ArticalFeatured/ArticleFeatured"
import RecentFeaturedList from "../RecentFeatureList/RecentFeaturedList"

import'./Main.css'
const Main = props =>{
    return <main>
        <ArticalFeatured 
        imgSrc='https://picsum.photos/800/480'
        title='Finding  something bla bla'
        subtitle=' Feb 13, 2023| 3 comments '
        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem odio qui deserunt eius, eos
        consequuntur iusto pariatur porro nihil asperiores libero. Aperiam voluptatibus deserunt cupiditate
        quae asperiores ullam quos?'
        />
        <RecentFeaturedList />
    </main>
}

export default Main