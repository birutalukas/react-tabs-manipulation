import React from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 84%;
    margin: 0 auto;
    padding: 5rem 0;

    @media screen and (min-width: 768px) {
        width: 60%;
    }

    @media screen and (min-width: 1920px) {
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10rem 0;
        align-items: center;
        width: 75%;
    }
`;

const Container = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
