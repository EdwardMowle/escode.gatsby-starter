import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        min-height: 100%;
        font-family: 'Metrophobic', sans-serif;
        overflow-y: scroll;
    }
`;

export default () => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Metrophobic&display=swap" rel="stylesheet" />
        </Helmet>
        <Normalize />
        <GlobalStyle />
    </>
);
