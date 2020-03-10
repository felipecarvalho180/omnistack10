
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import SearchBar from './search-bar/SearchBar';
import devsService from '../../services/devs/devs.service';

function Main() {
  const navigation = useNavigation();

  const [ currentRegion, setCurrentRegion ] = useState(null);
  const [ devs, setDevs ] = useState([ ]);

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

  const handleRegionChanged = region => {
    setCurrentRegion(region);
  };

  const loadDevs = async ({ techs }) => {
    const { latitude, longitude } = currentRegion;
    
    let result;
    try {
      result = await devsService.get({
        longitude,
        latitude,
        techs,
      });
    } catch (error) {
      console.error(error);
      return;
    }
    
    setDevs(result);
  }

  return (
    <Wrapper>
      { currentRegion && (
        <Map
          onRegionChangeComplete={ handleRegionChanged } 
          initialRegion={ currentRegion } 
        >
          { devs.map(d => (
            <Marker
              key={ d.devId } 
              coordinate={{ 
                latitude: d.location.latitude, 
                longitude: d.location.longitude 
              }}
            >
              <Box>
                <MarkerImage 
                  resizeMode='contain'
                  source={{ uri: d.avatar_url }}
                />
              </Box>
              <Callout onPress={ () => {
                navigation.navigate('Profile', { 
                  github_username: d.github_username
                });
              } }>
                <CalloutWrapper>
                  <DevName>{ d.name }</DevName>
                  <DevBio>{ d.bio }</DevBio>
                  <DevTechs>{ d.techs.map(t => t) }</DevTechs>
                </CalloutWrapper>
              </Callout>
            </Marker>
          )) }
        </Map>
      ) }
      <SearchBar 
        onClick={ value => {
          loadDevs({ techs: value });
        } }
      />
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

const Box = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  padding: 1px;
  border-width: 4px;
  justify-content: center;
`;

const MarkerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-self: center;
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