import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    html, body {
        margin: 0;
    }

    body {
        min-height: 100%;
        background-color: ${props => props.theme.bodyThemeBg};
        font-family: 'Nunito', sans-serif;
    }
`;