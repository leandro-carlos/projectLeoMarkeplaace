import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Dispatch } from 'redux'

import dioLogo from '../assets/dioLogo.png'
import api from '../service/api'
// import formatValue from '../utils/formatValue.js'

function Catalog() {


    const [product, setProduct] = useState([])

    useEffect(() => {
        async function loading() {
            await api.get().then((response) => {
                console.log(response.data);
                setProduct(response.data)
            })
        }
        loading()
    }, [])

    return (
        <View>
            <FlatList
                data={product}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={style.viewRender}>
                        <Text>{item.tittle}</Text>
                        <Image source={dioLogo} />
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

export default Catalog;
