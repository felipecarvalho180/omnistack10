
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import SearchBar from './search-bar/SearchBar';

function Main() {
  const navigation = useNavigation();

  const [ currentRegion, setCurrentRegion ] = useState(null);

  useEffect(() => {
    loadCurrentPosition();
  }, [ ]);

  const loadCurrentPosition = async () => {
    const { granted } = await requestPermissionsAsync();

    if(granted) {
      const { coords } = await getCurrentPositionAsync({ 
        enableHighAccuracy: true,
      });

      const { latitude, longitude } = coords;

      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  return (
    <Wrapper>
      { currentRegion && (
        <Map initialRegion={ currentRegion } >
          <Marker coordinate={{ 
            latitude: -22.5405551, 
            longitude: -43.2017871 
          }}>
            <MarkerImage 
              source={{ uri: 'https://avatars2.githubusercontent.com/u/37779345?s=460&v=4' }}
            />
            <Callout onPress={ () => {
              navigation.navigate('Profile', { 
                github_username: 'felipecarvalho180'
              });
            } }>
              <CalloutWrapper>
                <DevName>Felipe Carvalho</DevName>
                <DevBio>
                  Desenvolvedor Junior na empresa Cogoli, fascinado por React e React Native.
                </DevBio>
                <DevTechs>
                  React.JS, React Native, Node.JS 
                </DevTechs>
              </CalloutWrapper>
            </Callout>
          </Marker>
        </Map>
      ) }
      <SearchBar />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  background-color: #FFF;
  align-items: center;
  justify-content: center;
`;

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const MarkerImage = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #FFF;
`;

const CalloutWrapper = styled.View`
  width: 260px;
`;

const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

const DevTechs = styled.Text`
  margin-top: 5px;
`;

export default Main;