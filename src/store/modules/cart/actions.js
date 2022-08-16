export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        payload: id
    }
}

export function addToCartRequest(product) {
    return {
        type: '@cart/ADD_SUCESS',
        payload: product
    }
}
