import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Imports

import Header from './src/components/Header'
import Catalog from './src/pages/Catalog'
import { Horse, Heart, Cube } from "phosphor-react";


export default function App() {
  return (
    <View style={style.container}>
      <Header />
      <Catalog />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#313445',
    flex: 1
  }
})