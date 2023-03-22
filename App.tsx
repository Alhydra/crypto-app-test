import React from 'react';
import GetStarted from './Screens/GetStarted';
import Authentication from './Screens/Authentication';
import Dashboard from './Screens/Dashboard';

import {
  GET_STARTED_SCREEN,
  AUTHENTICATION_SCREEN,
  DAHBOARD_SCREEN,
} from './config/Constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={GET_STARTED_SCREEN} component={GetStarted} />
        <Stack.Screen name={AUTHENTICATION_SCREEN} component={Authentication} />
        <Stack.Screen name={DAHBOARD_SCREEN} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
