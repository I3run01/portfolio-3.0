import styled from "styled-components";

export const MobileTopMenuDiv = styled.div`
    display: none;
    
    height: 40px;
    width: 100%;

    background-color: red;

    @media screen and (max-width: 800px) {
        display: block;
    }

`