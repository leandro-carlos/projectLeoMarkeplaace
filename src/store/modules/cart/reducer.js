import { addToCartRequest } from './actions'

const initialState = {
    products: [],
}

export default function cart(state = initialState, action) {

    switch (action.type) {

        case '@cart/ADD_SUCESS':
            return action.payload
        default:
            return state
    }
}
