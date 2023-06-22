import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Global */
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #cfb7a3;

    font-family: 'Poppins', sans-serif; 
    font-weight: 300;
    line-height: 1.5;
    color: #fff;
  }

  /* Fonts */

  /* 
  Font Family Syntax refference

  font-family: 'Noto Serif Display', serif;
  font-family: 'Poppins', sans-serif; 

  */

  h1 {
    font-family: "Noto Serif Display", serif;
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    margin-bottom: 2.5rem;

    @media screen and (min-width: 1920px) {
      margin-bottom: 3rem
    }

    span {
        color: #e5d6c7;
    }
  }

  h2 {
    font-weight: 400;
    line-height: 1.25;

    @media screen and (min-width: 1920px) {
      margin-bottom: 2.5rem
    }

    span {
      color: #e5d6c7;
    }
  }

  p {
    font-size: 1.1rem;
  }

  /* Video Player */

  video {
    width: 100%;
  }

  .video-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 25px;

    width: 100%;
    height: 250px;

    @media screen and (min-width: 768px) {
        height: 350px;
    }

    @media screen and (min-width: 1920px) {
        height: 600px;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 1rem;
    left: 1rem;

    @media screen and (min-width: 768px) {
      bottom: 3rem;
    left: 3rem;

    }
  }

  .control-btn {
    width: 3rem;
    height: 3rem;
    background: #64d1d3;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .play {
      width: 1rem;
      height: auto;
    }
    .pause {
      width: 2rem;
      height: auto;
    }
  }

  input[type="range"] {
    -webkit-appearance: none !important;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    height: 4px;
    width: 350px;
  }

`;

export default GlobalStyle;
