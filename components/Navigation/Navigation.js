import * as React from 'react';

import { useState } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../pages/SignUp/SignUp';
import MainPage from '../pages/MainPage/MainPage';


const Stack = createNativeStackNavigator();

function Navigation() {
  const [userData, setUserData] = useState()

  const takeUserData = (data) => {
    console.log('hello world')
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;