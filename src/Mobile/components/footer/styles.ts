import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: black;
`;

export const InfoArea = styled.div`
    width: 45%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span{
        color: ${theme.colors.white};
        font-size: 11pt;

        a{
            text-decoration: none;
            color: ${theme.colors.white};

            transition: 0.2s;
            &:hover {
            color: #ddd;
            }
        }
    }
`;

export const Logo = styled.img`
    height: 5rem;
`;