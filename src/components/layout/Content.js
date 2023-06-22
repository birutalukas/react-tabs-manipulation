import styled from "styled-components";

export const ContentDesktopLeft = styled.div`
    width: 100%;
    @media screen and (min-width: 1920px) {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding-right: 2rem;
    }
`;
export const ContentDesktopRight = styled.div`
    display: none;

    @media screen and (min-width: 1920px) {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 2rem;
    }
`;
