
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/main/Main';
import Profile from '../pages/profile/Profile';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={ Main }/>
        <Stack.Screen name='Profile' component={ Profile }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
