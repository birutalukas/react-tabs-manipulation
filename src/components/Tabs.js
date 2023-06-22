import styled from "styled-components";

import { ReactComponent as PlusSvg } from "../assets/images/greyPlus.svg";

export const Tabs = styled.div`
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 1.5rem;
    @media screen and (min-width: 1920px) {
        margin-bottom: 2.5rem;
    }
`;

export const Tab = styled.button`
    flex: 1;
    margin-right: 0.5rem;
    height: 2.5rem;
    border-radius: 50px;
    border: none;
    outline: none;
    border-bottom: ${(props) => (props.active ? "none" : "")};
    background-color: ${(props) => (props.active ? "#fff" : "#e5d6c7")};
    color: ${(props) => (props.active ? "#e5d6c7" : "#fff")};
    transition: 0.25s ease-in-out;

    cursor: pointer;
    :hover {
        background-color: white;
        color: #e5d6c7;
    }
    :last-child {
        margin-right: 0;
    }
`;

export const TabContentWrapper = styled.div`
    width: 100%;
    @media screen and (min-width: 1920px) {
        width: 70%;
    }
`;
export const TabTextContent = styled.div`
    @media screen and (max-width: 1920px) {
        margin-top: 3rem;
    }
`;
export const TabMedia = styled.div`
    position: relative;
    width: 100%;
    img,
    .video-wrapper {
        border-radius: 25px;
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center;
        opacity: 0.8;

        @media screen and (min-width: 768px) {
            height: 350px;
        }

        @media screen and (min-width: 1920px) {
            height: 100%;
        }
    }

    @media screen and (min-width: 1920px) {
        display: none;
        height: 600px;
        ${(props) => (props.desktop ? "display:block;" : "")}
    }
`;
export const TabVideoWrapper = styled.div`
    position: relative;
    width: 100%;

    border-radius: 25px;
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    opacity: 0.8;

    @media screen and (min-width: 768px) {
        height: 350px;
    }

    @media screen and (min-width: 1920px) {
        height: 600px;
    }
`;
export const TabMediaTitle = styled.div`
    position: absolute;
    font-family: "Noto Serif Display", serif;
    font-size: 4rem;
    right: 1rem;
    bottom: -15%;
    color: #e5d6c7;
    opacity: 0.5;

    @media screen and (min-width: 768px) {
        bottom: -11%;
    }
    @media screen and (min-width: 1920px) {
        font-size: 7rem;
        bottom: -12%;
    }
`;

const StyledCta = styled.a`
    text-decoration: none;
    font-weight: 400;
    color: #fff;
    display: flex;
    align-items: center;
    width: fit-content;

    :hover {
        svg {
            transform: rotate(180deg);
            transition: 0.25s ease-in-out;
        }
    }
`;

const StyledCtaIcon = styled.div`
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 1rem;
`;
export const TabCtaButton = ({ children, href, target }) => {
    return (
        <StyledCta href={href} target={target}>
            {children}{" "}
            <StyledCtaIcon>
                <PlusSvg />
            </StyledCtaIcon>
        </StyledCta>
    );
};
