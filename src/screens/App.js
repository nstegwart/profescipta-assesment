import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './home';
import DetailOrder from './detail-order';
import navigationData from '../shared/navigationData';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" options={navigationData.noHeader.options} component={HomePage} />
        <Stack.Screen name="DetailOrder" options={navigationData.noHeader.options} component={DetailOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}