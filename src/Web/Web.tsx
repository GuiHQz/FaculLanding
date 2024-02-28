import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { InfoCard } from "./components/InfoCard/InfoCard";

import ImageTwo from "../assets/images/linguagens.png";
import ImageOne from "../assets/images/team-image.png";
import ImageThree from "../assets/images/contact-image.png";

import { Contact } from "../data/text";
import { AboutText } from "../data/text";
import { OurCourses } from "../data/text";

function Web() {
  return (
    <>
      <Navbar />
      <InfoCard image={ImageOne} title="Sobre" text={AboutText} />
      <InfoCard
        image={ImageTwo}
        title="Nossos cursos"
        text={OurCourses}
        imageRight
      />
      <InfoCard image={ImageThree} title="Contato" text={Contact} />
      <Footer />
    </>
  );
}

export default Web;
