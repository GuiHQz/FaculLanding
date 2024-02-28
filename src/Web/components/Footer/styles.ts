import styled from "styled-components";
import { theme } from "../../../theme";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`;

export const Logo = styled.img`
  height: 5rem;
`;

export const Devs = styled.span`
  display: flex;
  text-align: center;
  flex-direction: column;

  span {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  span > h5, p {
    margin: 1rem 1rem 0 1rem;
  }

  span > h5 {
    cursor: pointer;

    &:hover {
      opacity: 50%;
    }
  }
`;
