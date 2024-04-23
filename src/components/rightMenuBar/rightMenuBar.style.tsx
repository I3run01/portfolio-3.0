import styled from "styled-components";
import { Colors } from "src/styles/globalVariables.style";

type props = {
    $fontColor: string
}

export const RightMenuBarDiv = styled.div<props>`

    height: 100%;
    width: 60px;

    background: rgba(98, 99, 211, 0.14);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .icons {
        padding-top: 10px;
        padding-bottom: 10px;
        width: 100%;

        display: flex;
        justify-content: center;

        &:hover, &:hover > svg {
            cursor: pointer;
            color: ${Colors.themeColor01};
        }

        svg {
            width: 30px;
            color: ${props => props.$fontColor};
        }
    }

    @media screen and (max-width: 800px) {
        display: none;
        width: 0px;
        position: fixed;
        right: 0;
    }
    
    `