import React, { useState, useMemo, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import { setCart } from '../store/modules/cart/actions'

// Imports

import Header from '../components/Header'
import FloatingButton from './floatingButton'
import { Plus, Minus, ShoppingCartSimple } from 'phosphor-react-native';
import { adicionarMais } from '../store/modules/actionTypes'

export function Cart({ navigation, product, setProductRedux }) {

    const [refresh, setRefresh] = useState(false)

    const cartSize = useMemo(() => {
        return product.length || 0
    }, [product])

    const cartTotal = useMemo(() => {
        const cartAmount = product.reduce((acc, product) => {
            const totalPrice = acc + (product.quantity * product.price)
            return totalPrice;
        }, 0)
        return cartAmount;
    }, [])


    return (
        <View style={style.container}>
            <Header />
            <View style={style.containerIncontainer}>

                <FlatList
                    data={product}
                    extraData={refresh}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ paddingBottom: 105, }}
                    ListEmptyComponent={() =>
                        <View
                            style={{
                                alignItems: 'center', justifyContent: 'center', marginVertical: '50%', flex: 1, marginHorizontal: 50,
                            }}>
                            <Text>Lista vazia</Text>
                        </View>}
                    renderItem={({ item, index }) =>
                        <View style={style.box}>
                            <Image
                                style={{ width: 150, height: 75, justifyContent: 'center', alignItems: 'center', paddingVertical: 5 }}
                                source={{ uri: item.image_url }} />
                            <View style={style.boxInBox}>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, paddingBottom: 5 }}>{item.tittle}</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, paddingBottom: 8 }}>R$ {item.price}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 16, paddingVertical: 2 }}>{item.quantity} X </Text>
                                    <Text style={{ fontWeight: 'bold', color: 'red', fontSize: 16, paddingVertical: 2 }}>R$ {item.quantity * item.price}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 5, alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ borderWidth: 1 }}
                                    onPress={() => {
                                        product[index].quantity += 1
                                        setProductRedux(product)
                                        setRefresh(!refresh)
                                    }}>
                                    <Plus size={24} weight="thin" />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={{ borderWidth: 1 }}>
                                    <Minus size={24} weight="thin" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                />

                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 35, marginVertical: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ShoppingCartSimple size={36} color='#fff' />
                        <Text style={{ fontSize: 19 }}>{cartSize} Item</Text>
                    </View>
                    <Text>R$ {cartTotal}</Text>
                </View>
                
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
    },
    insideContainer: {
        flex: 1,
        width: '100%',
        margin: '20%',
        borderWidth: 3,
        justifyContent: 'center',
        flex: 1,
        paddingRight: 10,
    }
})

const mapStateToProps = ({ produto }) => {
    return {
        product: produto.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setProductRedux: product => dispatch(setCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)