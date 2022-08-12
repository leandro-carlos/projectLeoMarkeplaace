import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

// Imports

import dioLogo from '../assets/dioLogo.png'
import Header from '../components/Header'

export default function Cart({ navigation }) {

    const [product, setProduct] = useState([
        {
            id: '1',
            tittle: 'Imagem Teste',
            image_url: 'https://fernandopitt.com.br/wp-content/uploads/2020/03/digital-innovation-one-1200x480.jpg',
            price: 150,
            quantity: '1'
        },
    ])


    return (
        <View style={style.container}>
            <Header />
            <View style={style.containerIncontainer}>

                <FlatList
                    data={product}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 20, }}
                    ListEmptyComponent={() =>
                        <View
                            style={{
                                alignItems: 'center', justifyContent: 'center', marginVertical: '50%', flex: 1, marginHorizontal: 50,
                            }}>
                            <Text>Lista vazia</Text>
                        </View>}
                    renderItem={({ item }) =>

                        <View style={style.box}>
                            <Image
                                style={{ width: 150, height: 75, justifyContent: 'center', alignItems: 'center', paddingVertical: 5 }}
                                source={{ uri: item.image_url }} />
                            <View style={style.boxInBox}>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, paddingBottom: 5 }}>Assinatura Trimestral</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, paddingBottom: 8 }}>R$ {item.price}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 16, paddingVertical: 2 }}>{item.quantity} X </Text>
                                    <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 16, paddingVertical: 2 }}>R$ {item.quantity * item.price}</Text>
                                </View>


                            </View>
                        </View>
                    }
                />
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#313445',
        flex: 1
    },
    containerIncontainer: {
        backgroundColor: 'orange',
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    box: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 15,
        marginHorizontal: '5%',
        paddingVertical: '5%',
        paddingLeft: 10,
        flexDirection: 'row'
    },
    boxInBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingRight: 10,
    }
})