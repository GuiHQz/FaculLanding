import * as Styles from "./styles";

import { Slogan } from "../../../data/text";

import Logo from "../../../assets/images/logo.png";
import Image from "../../../assets/images/digitando.jpg";

export const Content: React.FC = () => {
  return (
    <Styles.MainContainer>
      <Styles.Content>
        <div className="first">
          <img src={Logo} height={250} />
        </div>
        <div className="border" />
        <div className="second">
          <pre>{Slogan}</pre>
        </div>
      </Styles.Content>
      <Styles.Image src={Image} />
    </Styles.MainContainer>
  );
};
