
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { GlobalStyle } from '../style/global/globals';
import Side from './side/Side';
import ListItem from './list-item/ListItem';
import devsService from '../services/devs/devs.service';

function App() {
  const [ devs, setDevs ] = useState([ ]);

  useEffect(() => {
    getDevs()
  }, [ ]);

  const getDevs = async () => {
    let result;
    try {
      result = await devsService.getDevs();
    } catch (error) {
      console.error(error);
      return;
    }

    setDevs(result);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Side updateDevs={ newDev => setDevs([ ...devs, newDev ]) }/>
      <ContentWrapper>
        <ListWrapper>
          <ListItem devs={ devs }/>  
        </ListWrapper>
      </ContentWrapper>
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

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 30px;
`;

const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export default App;
