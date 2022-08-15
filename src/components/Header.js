import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Imports
import { Horse, Heart, Cube } from 'phosphor-react-native';


export default function Header() {
    return (
        <View style={style.container}>
            <Text style={style.txtHeader}>
                MarketPlace do Leozinho
            </Text>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#313445',
        paddingVertical: 20
    },
    header: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    txtHeader: {
        color: 'white',
        fontSize: 26,
    }
})