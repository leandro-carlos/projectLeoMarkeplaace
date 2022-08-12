import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Cart({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.insideContainer}>
                <Text> Olá </Text>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    insideContainer: {
        flex: 1,
        width: '100%',
        margin: '20%',
        borderWidth: 3,
        backgroundColor: 'green'
    }
})