import styled from "styled-components";

export const LayoutDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 100%;

    @media screen and (max-width: 800px) {
        height: calc(100% - 40px);
    }

`