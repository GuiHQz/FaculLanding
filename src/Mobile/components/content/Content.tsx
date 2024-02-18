import { BarSpan, BlockContent, Container, ImageArea, MainFrame, MainFrameContent, TextArea, TitleArea } from "./styles"
import logo from "../../../assets/images/logo.png"
import sobreImage from "../../../assets/images/equipe.png"
import nossosCursosImage from "../../../assets/images/linguagens.png"
import contatoImage from "../../../assets/images/contato.png"

function Content() {

  return (
    <>
      <Container>
        <MainFrame>
          <MainFrameContent>
            <img src={logo} />
          </MainFrameContent>
          <MainFrameContent>
            <BarSpan />
            <div>
              <span>
                Liberte seu talento
              </span>
              <span>
                Desbloqueie seu potencial
              </span>
              <span>
                Transforme seu futuro
              </span>
            </div>
          </MainFrameContent>
          
        </MainFrame>
        <BlockContent>
          <TitleArea>
            <h2>Sobre</h2>
          </TitleArea>
          <ImageArea>
            <img src={sobreImage} />
          </ImageArea>
          <TextArea>
            <p>
              Na Level Up Programming, estamos comprometidos em capacitar indivíduos através da educação em tecnologia.
            </p>
            <p>
              Oferecemos cursos práticos e projetados para o mercado atual, focados em desenvolver habilidades técnicas e uma mentalidade de crescimento.
            </p>
            <p>
              Junte-se a nós nesta jornada de aprendizado e prepare-se para desbloquear seu potencial na indústria de tecnologia.
            </p>
          </TextArea>
        </BlockContent>

        <BlockContent>
          <TitleArea>
            <h2>Nossos Cursos</h2>
          </TitleArea>
          <ImageArea>
            <img src={nossosCursosImage} />
          </ImageArea>
          <TextArea>
            <p>
              Descubra nossos cursos especializados na Level Up Programming!
            </p>
            <p>
              Oferecemos uma variedade de programas de treinamento atualizados e práticos, desenvolvidos por especialistas da indústria.
            </p>
            <p>
              De iniciantes a profissionais experientes, temos o curso certo para você. Explore nossa lista abaixo e comece sua jornada de aprendizado hoje mesmo!
            </p>
          </TextArea>
        </BlockContent>

        <BlockContent>
          <TitleArea>
            <h2>Contato</h2>
          </TitleArea>
          <ImageArea>
            <img src={contatoImage} />
          </ImageArea>
          <TextArea>
            <p>
              Estamos aqui para ajudar! Entre em contato conosco para obter mais informações sobre nossos cursos, inscrições, eventos ou quaisquer outras dúvidas que você possa ter. Nossa equipe dedicada está pronta para fornecer suporte e assistência personalizada.
            </p>
            <p>
              Estamos ansiosos para ouvir de você!
            </p>
          </TextArea>
        </BlockContent>

      </Container>
    </>
  )
}

export default Content
