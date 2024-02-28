import * as Styles from "./styles";
import Logo from "../../../assets/images/logo.png";

export const Footer: React.FC = () => {
  return (
    <Styles.MainContainer>
      <Styles.Logo src={Logo} />
      <Styles.Devs>
        <h4>Desenvolvido por</h4>
        <span>
          <h5>Guilherme</h5> 
          <p>•</p> 
          <h5>Wesley</h5>
        </span>
      </Styles.Devs>
    </Styles.MainContainer>
  );
};
