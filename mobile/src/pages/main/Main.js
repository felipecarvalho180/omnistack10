
import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

function Main() {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <MText>Main</MText>
      <Button onPress={ () =>  navigation.navigate('Profile') }>
        <MText>Navegar</MText>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.View``;

const MText = styled.Text``;

const Button = styled.TouchableHighlight``;

export default Main;