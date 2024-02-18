import styled from "styled-components";
import { theme } from "../../../theme.ts";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  background: ${theme.colors.green};
`;

export const IconArea = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoArea = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MenuIcon = styled.img`
    width: 45%;
`;