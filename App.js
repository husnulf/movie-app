import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/view/home';
import Splash from './src/view/splash';

const AppNavigator = createStackNavigator(
  {
    Splash: Splash,
    Home: Home,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
    },
    headerMode: 'none',
  },
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Navigator>
      <Splash />
      <Home />
    </Navigator>
  );
}
