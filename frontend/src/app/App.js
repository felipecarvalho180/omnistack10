
import React from 'react';

import styled from 'styled-components';

import { GlobalStyle } from '../style/global/globals';
import Side from './side/Side';
import List from './list/List';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Side />
      <List />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  @media (max-width: 1000px) {
    flex-direction: column;

    & > :first-child {
      width: 100%;
    }

    & > :nth-child(2) {
      margin-left: 0;
      margin-top: 30px;
    }
  }
`;

export default App;
