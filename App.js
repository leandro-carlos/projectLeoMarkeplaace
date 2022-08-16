import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigator from './src/utils/Navigator';
import { Provider } from 'react-redux'
import store from './src/store/store'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store} >
      <Navigator />
    </Provider>
  )
}