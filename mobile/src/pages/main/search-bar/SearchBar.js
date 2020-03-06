
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/native';
import { Keyboard, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

// import { Container } from './styles';

export default function SearchBar({
  onClick,
}) {
  let keyboardDidShow;
  let keyboardDidHide;

  const [ keyboardStatus, setKeyboardStatus ] = useState(false);
  const [ keyboardHeight, setKeyboardHeight] = useState(0);
  const [ searchString, setSearchString ] = useState('');

  useEffect(() => {
    keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow,
    );
  }, [ ]);

  useEffect(() => {
    keyboardDidHide = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardHide, 
    );
  }, [ ]);

  const handleKeyboardShow = event => {
    const screenHeight = Dimensions.get('window').height;
    setKeyboardHeight( (screenHeight - event.endCoordinates.screenY) + 90);
    setKeyboardStatus(true);
  };

  const handleKeyboardHide = () => {
    setKeyboardStatus(false);
  };

  return (
    <Wrapper 
      keyboardHeight={ keyboardHeight }
      keyboardStatus={ keyboardStatus } 
    >
      <TechsInput 
        value={ searchString }
        onChangeText={ value => setSearchString(value) }
      />
      <SearchButton onPress={ 
        () => onClick(searchString) 
      }>
        <SearchButtonIcon />
      </SearchButton>
    </Wrapper>
  );
}

const Wrapper = styled(Animatable.View).attrs({
  transition: [ 'bottom' ],
  duration: 200
})`
  position: absolute;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
  bottom: 20px;

  ${ ({ keyboardHeight, keyboardStatus }) => keyboardHeight && css`
    bottom: ${ keyboardStatus ? keyboardHeight : 20 }px;
  ` }
`;

const TechsInput = styled.TextInput.attrs({
  placeholder: 'Buscar devs por techs...',
  placeholderTextColor: '#999',
  autoCapitalize: 'words',
  autoCorrect: false,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: {
    width: 4,
    height: 4,
  },
  elevation: 2,
})`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
`;

const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #8e4dff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const SearchButtonIcon = styled(MaterialIcons).attrs({
  name: 'my-location'
})`
  font-size: 20px;
  color: #fff;
`;