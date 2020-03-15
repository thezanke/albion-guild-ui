import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../styles/global';
import NormalizeStyle from '../styles/normalize';

import { App } from './App';

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 40px 40px;

  .App__header {
    padding: 45px;
    font-size: 2.5em;
    text-align: center;
  }

  .App__content {
    padding: 0 35px 45px;
  }
`;

export const AppLayout = () => {
  return (
    <AppStyle>
      <NormalizeStyle />
      <GlobalStyle />
      <App />
    </AppStyle>
  );
};
