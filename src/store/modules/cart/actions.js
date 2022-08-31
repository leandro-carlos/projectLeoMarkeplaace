import { setCartSucess } from '../actionTypes'

export function setCart(product) {
    return {
        type: setCartSucess,
        payload: product
    }
}