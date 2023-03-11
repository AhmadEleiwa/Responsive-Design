import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import Container from "../components/Container/Container"
import Content from "../components/Content/Content"
const Home = props => {
    return <>
        <Container>
            <Header />
            <Content />
        </Container>
        <Footer />
    </>
}


export default Home