import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Wrapper>
      <Title>Funciona!</Title>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 20px;
  color: white;
`;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
