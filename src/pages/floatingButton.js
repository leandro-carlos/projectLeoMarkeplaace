import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export default function FloatingButton() {

    const navigation = useNavigation();

    return (
        <View style={style.container}>

            <TouchableOpacity
                style={style.btnFloat}
                activeOpacity={0.5}
                onPress={() => { console.log('era pra chamar'), navigation.navigate('Cart') }}>
                <Text style={style.txtFloat}>2 Itens</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.btnFloat}
                activeOpacity={0.5}
            >
                <Text style={style.txtFloat}>R$ 200,00</Text>

            </TouchableOpacity>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        bottom: 0,
        position: 'absolute',
        backgroundColor: '#e83f5b',
        paddingHorizontal: 18,
        paddingVertical: 20,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },

    btnFloat: {
        padding: 15
    },
    txtFloat: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    }

})