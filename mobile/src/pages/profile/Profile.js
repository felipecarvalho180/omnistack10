

import React from 'react';
import styled from 'styled-components/native';
import { useRoute } from '@react-navigation/native';

function Profile() {
  const route = useRoute();

  return (
    <Wrapper>
      <MText>
        { `Olá ${ route.params?.name }` }
      </MText>
    </Wrapper>
  );
};

const Wrapper = styled.View``;

const MText = styled.Text``;

export default Profile;