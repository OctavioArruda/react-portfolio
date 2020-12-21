import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  html, body, #root {
    height: 100%;

    font-family: "Ubuntu", sans-serif;

    /* Each rem equals to 10 */
    font-size: 10px; 
  }
  *, button, input {
      border:0;
      outline: 0;
      font-family: 'Ubuntu', sans-serif;
  }
  :root {
    --primary-black: #272932;
    --secondary-light: #E7ECEF;
    --third-green: #0f7173;
    --fourth-red: #F05D5E;
    --fifth-brown: #F05D5E;
 
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
 
    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;
 
    --link: #5d80d6;
 
    --rocketseat: #6633cc;
  }
`;