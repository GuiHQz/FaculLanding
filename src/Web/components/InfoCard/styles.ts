import styled from "styled-components";
import { theme } from "../../../theme";

export const MainContainer = styled.div`
  
`;

export const Image = styled.img`
  height: 25rem;
`;

export const RightText = styled.div`
  display: flex;
  padding: 1rem 0;
  color: ${theme.colors.white};
  justify-content: space-around;
  background-color: ${theme.colors.darkGreen};

  h2 {
    font-weight: 500;
  }

  pre {
    font-weight: 300;
    white-space: pre-wrap;
  }
`;

export const LeftText = styled.div`
  display: flex;
  padding: 1rem 0;
  color: ${theme.colors.white};
  justify-content: space-around;
  background-color: ${theme.colors.darkGreen};

  h2 {
    font-weight: 500;
  }

  pre {
    font-weight: 300;
    white-space: pre-wrap;
  }
`;

export const TextContent = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  span {
    width: 30vw;
    text-align: justify;
  }
`;
