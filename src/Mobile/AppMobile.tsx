import Content from "./components/content/Content"
import NavBar from "./components/navBar/NavBar"
import { Container } from "./styles"

function AppMobile() {

    return (
      <>
        <Container>
          <NavBar />
          <Content />
        </Container>
      </>
    )
  }
  
  export default AppMobile
  