import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${(props) => props.theme['base-background']} !important;
    color:${(props) => props.theme['base-color']};
    -webkit-font-smoothing: antialiased;
}

body, input , textarea , button {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`
