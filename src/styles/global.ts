import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #a4916d;
    --white: #fff;
    --gray-light: #eee;
    --gray-middle: #ddd;
    --gray: #a6a6a6;
    --gray-dark: #8c8c8c;
    --dark: #333;
    --indicator: #15c39a;
  }

  html {
    font-size: 62.5%; /* 1rem to equal 10px */

    @media(max-width: 1080px) {
      & {
        font-size: 56.3%;
      }
    }

    @media(max-width: 950px) {
      & {
        font-size: 53.13%;
      }
    }
    
    @media(max-width: 900px) {
      & {
        font-size: 50%;
      }
    }

    @media(max-width: 1280px) and (max-height: 650px) {
      & {
        font-size: 50%;
      }
    }
  }

  body {
    background: #a4916d url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
   
  }

  body, input, button {
    font: 1.4rem Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 2rem 5rem;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  .Toastify__toast--error {
    background: var(--indicator);
  }
`;


