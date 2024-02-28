import * as Styles from "./styles";
import Image from "../../../assets/images/logo.png"

export const Navbar: React.FC = () => {
  return (
    <Styles.MainContainer>
      <Styles.LeftContent src={Image} />
      <Styles.RightContent>
        <li>Sobre</li>
        <li>Nossos cursos</li>
        <li>Contato</li>
      </Styles.RightContent>
    </Styles.MainContainer>
  );
};
