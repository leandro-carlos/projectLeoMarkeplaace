import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Imports


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
        marginVertical: 35
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