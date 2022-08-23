import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addToCart } from '../store/modules/cart/actions'
import dioLogo from '../assets/dioLogo.png'
import api from '../service/api'

function Catalog({ setProductRedux, productsList }) {

    useEffect(() => {
        async function loading() {
            await api.get().then((response) => {
                setProductRedux(response.data)
            })
        }
        loading()
    }, [])


    return (
        <View>
            <FlatList
                data={productsList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={style.viewRender}>
                        <Image source={{uri: item.image_url}} />
                        <Text style={style.txtAssinatura}>{item.tittle}</Text>
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

const mapStateToProps = ({ produto }) => {
    return {
        productsList: produto.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProductRedux: product => dispatch(addToCart(product))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
