import styled from "styled-components";
import { theme } from "../../../theme.ts";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  background: linear-gradient(to top, ${theme.colors.black}, ${theme.colors.darkGreen});
`;