
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/main/Main';
import Profile from '../pages/profile/Profile';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Main'
        screenOptions={{
          headerTitleAlign: "center",
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
        }}
      >
        <Stack.Screen 
          name='Main' 
          component={ Main }
          options={{
            title: 'DevRadar'
          }}
        />
        <Stack.Screen 
          name='Profile' 
          component={ Profile }
          options={{
            title: 'Perfil no Github'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
