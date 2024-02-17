import { Container, IconArea, LogoArea, MenuIcon } from "./styles"
import menuIcon from "../../../assets/icons/burger-menu.svg"
import logo from "../../../assets/images/logo.png"

function NavBar() {

  return (
    <>
      <Container>
        <IconArea>
            <MenuIcon src={menuIcon} />
        </IconArea>
        <LogoArea>
            <MenuIcon src={logo} />
        </LogoArea>
      </Container>
    </>
  )
}

export default NavBar
