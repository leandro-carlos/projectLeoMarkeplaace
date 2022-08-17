import { addToCartSucess, addToCartRequest } from "../actionTypes"

const initialState = {
    products: [],
}

export default function reducerR(state = initialState, action) {

    switch (action.type) {

        case addToCartSucess:
            return {
                ...state,
                products: action.payload.products
            }
        default:
            return state
    }
}
