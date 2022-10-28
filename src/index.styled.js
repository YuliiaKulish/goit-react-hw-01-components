// @import-normalize; /* bring in normalize.css styles */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body {  
   margin: 20px;
       background-color: rgb(1 1 1 / 25%);
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
     sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
 }

 code {
   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
     monospace;
 }

 li {
  list-style: none;
 }

 #root {

  display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;      
 }
`;
