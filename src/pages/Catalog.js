import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'

import dioLogo from '../assets/dioLogo.png'
import formatValue from '../utils/formatValue.js'

function Catalog() {

    const [product, setProduct] = useState([
        {
            id: '1',
            tittle: 'Imagem Teste',
            image_url: './assets',
            price: 150
        },
        
        
    ])

    return (
        <View>
            <FlatList
                data={product}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={style.viewRender}>
                        <Text>{item.tittle}</Text>
                        <Image
                            source={dioLogo}
                        />
                        <Text style={style.txtAssinatura}>Assinatura Trimestral</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text> R$ {item.price}</Text>
                            <TouchableOpacity><Text>Adicionar</Text></TouchableOpacity>
                        </View>

                    </View>
                )
                }
            />
        </View >
    )
}

export default Catalog;

const style = StyleSheet.create({
    viewRender: {
        backgroundColor: '#888b96',
        borderRadius: 25,
        marginVertical: 25,
        marginHorizontal: 25,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    txtAssinatura: {
        color: '#b1b5c6',
        fontSize: 26,
    }
})