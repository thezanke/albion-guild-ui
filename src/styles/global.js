/* eslint no-unused-expressions: 0 */
import { createGlobalStyle } from 'styled-components';

import theme, { transparentize, TRANSITION_FAST } from './theme';

export default createGlobalStyle`
  /* Scrollbars */
  ::-webkit-scrollbar {
    width: 11px;
    background: ${transparentize(theme.B400, 0.6)};
    transition: background ${TRANSITION_FAST};

    &:hover {
      background: ${transparentize(theme.B400, 0.7)};
    }

    &:active {
      background: ${transparentize(theme.B400, 0.65)};
    }
  }

  ::-webkit-scrollbar-track {
    background: ${transparentize(theme.B400, 0.6)};
    transition: background ${TRANSITION_FAST};

    &:hover {
      background: ${transparentize(theme.B400, 0.7)};
    }

    &:active {
      background: ${transparentize(theme.B400, 0.65)};
    }
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.A500};
    border-radius: 0;
    opacity: 0.7;
    transition: background ${TRANSITION_FAST};

    &:hover {
      background: ${theme.A400};
    }

    &:active {
      background: ${theme.A300};
    }
  }

  a {
    color: ${theme.A500};
    text-decoration: none;
    transition: color 300ms;

    &:hover {
      color: ${theme.A400};
      text-decoration: underline;
    }
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Quicksand', Helvetica, sans-serif;
    min-height: 100vh;
    background: ${theme.B500};
    color: ${theme.font_primary};
    
    * {
      box-sizing: border-box;
    }
  }

  input {
    outline: none;
    box-shadow: none;
  }
`;
