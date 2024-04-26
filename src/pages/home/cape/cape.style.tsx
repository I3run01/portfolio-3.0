import styled from "styled-components";

type props = {
    $fontColor: string
}

export const CapeDiv = styled.div<props>`
    
    position: relative;
    width: 100%;
    height: 100vh;

    overflow: hidden;

    .photoDiv {
        position: relative;
        width: 100%;
        height: 100%;
        
        background: rgba(15, 0, 237, 0.24);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.4px);
        -webkit-backdrop-filter: blur(7.4px);

        clip-path: polygon(0 0, 100% 0, 100% 100%);
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%);

        img {
            position: absolute;
            bottom: 0%;
            right: 0;

            height: 80%;

            
        }

    }

    /* .abilitiesDiv {
        position: absolute;
        height: 100vh;
        width: 50%;
        background-color: purple;

        transform: rotate(45deg);
    } */

`

