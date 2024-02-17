import Content from "./components/content/Content"
import Footer from "./components/footer/Footer"
import NavBar from "./components/navBar/NavBar"
import { Container } from "./styles"

function AppMobile() {

    return (
      <>
        <Container>
          <NavBar />
          <Content />
          <Footer />
        </Container>
      </>
    )
  }
  
  export default AppMobile
  