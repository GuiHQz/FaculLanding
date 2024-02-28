import styled from "styled-components";
import { theme } from "../../../theme";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.green};
`;

export const LeftContent = styled.img`
  height: 6rem;
  margin-left: 5rem;
`;

export const RightContent = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    cursor: pointer;
    margin: 0 10rem;
    color: ${theme.colors.white};

    &:hover {
      opacity: 50%
    }
  }
`;
