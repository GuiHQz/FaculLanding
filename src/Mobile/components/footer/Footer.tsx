import { Container, InfoArea, Logo } from "./styles"

import logo from "../../../assets/images/logo.png"

function NavBar() {

  return (
    <>
      <Container>
        <InfoArea>
            <Logo src={logo}/>
        </InfoArea>
        <InfoArea>
            <span>Desenvolvido por:</span>
            <div>
                <span>
                    <a href="https://github.com/guihqz">Guilherme</a> | <a href="https://github.com/wesleysotnas64">Wesley</a>
                </span>
            </div>
        </InfoArea>
      </Container>
    </>
  )
}

export default NavBar
