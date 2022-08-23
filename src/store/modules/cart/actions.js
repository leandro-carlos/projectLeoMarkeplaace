import { addToCartRequest, addToCartSucess } from '../actionTypes'

export function addToCart(product) {
    return {
        type: addToCartSucess,
        payload: product
    }
}

export function addToRequest(id) {
    return {
        type: addToCartRequest,
        payload: id
    }
}
