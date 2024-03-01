import styled from "styled-components";
import { theme } from "../../../theme";

export const MainContainer = styled.div`
  position: relative;
  background-color: ${theme.colors.darkGreen};
  width: 100%;
  height: 28rem;
  overflow: hidden;
`;

export const Content = styled.div`
  .first {
    top: 20%;
    left: 15%;
    z-index: 1;
    position: absolute;
  }

  .second {
    top: 25%;
    right: 15%;
    z-index: 1;
    position: absolute;
    color: ${theme.colors.white};

    pre {
      font-size: 35px;
      font-weight: 300;
    }
  }

  .border {
    top: 21%;
    right: 48%;
    z-index: 1;
    height: 15rem;
    position: absolute;
    border-right: 3px solid ${theme.colors.white};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  opacity: 60%;
`;
