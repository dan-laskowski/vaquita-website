import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *,*::before,*::after {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.family.secondary};
    padding: 0;
    margin: 0;
    border: 0;
}
*:focus {
  outline: none;
}
html {
    font-size: 62.5%;
}
body {
  background:${({ theme }) => theme.color.lightBlue};
}

.horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
}
`;

export default GlobalStyle;
