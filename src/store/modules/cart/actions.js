export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        payload: id
    }
}

export function addToCartSucess(product) {
    return {
        type: '@cart/ADD_SUCESS',
        payload: product
    }
}
