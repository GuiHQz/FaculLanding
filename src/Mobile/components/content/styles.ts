import styled from "styled-components";
import { theme } from "../../../theme.ts";
import mainFrameImage from "../../../assets/images/digitando.jpg"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to top, ${theme.colors.black}, ${theme.colors.darkGreen});
`;

export const MainFrame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${mainFrameImage});
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
`;

export const MainFrameContent = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  img {
    width: 50%;
  }

  div{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span{
      color: white;
      font-size: 20pt;
      margin-top: 5px;
      margin-bottom: 5px;
      text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.8);
    }
  }
`;

export const BarSpan = styled.div`
  height: 2rem;
  width: 5px;
  margin-right: 10px;
  display: flex;
  background: white;
`;

export const BlockContent = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

export const TitleArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2{
    color: ${theme.colors.white};
    font-size: 24px;
  }
`;

export const ImageArea = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img{
    height: 100%;
  }
`;
export const TextArea = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  p{
    color: ${theme.colors.white};
    font-size: 14pt;
    font-weight: lighter;
    text-align: center;
    line-height: 28px;
    margin-bottom: 14px;
  }
`;