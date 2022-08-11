import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../components/Header'
import Catalog from './Catalog'
import FloatingButton from './floatingButton'

export default function Home({navigation}) {
    return (
        <View style={style.container}>
            <Header />
            <Catalog />
            <FloatingButton />
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#313445',
        flex: 1
    }
})