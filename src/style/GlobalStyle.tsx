import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Nanum Gothic";       
    src: url("/fonts/NanumGothic.ttf"); 
  }

  * {
    font-family: 'Nanum Gothic', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul,li {
    list-style: none;
  }
  button {
    border: none;
    cursor: pointer;
    user-select: none;
    background: none;
  }
  input {
    outline: none;
  }
`;
