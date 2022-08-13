import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import Cart from './src/pages/Cart'
import Navigator from './src/utils/Navigator';

const Stack = createNativeStackNavigator();



export default function App() {



  return (
    <Navigator />
  )
}