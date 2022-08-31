import { setCartSucess } from "../actionTypes"

const initialState = {
    products: {},
}

export default function reducerR(state = initialState, action) {

    switch (action.type) {

        case setCartSucess:
            return {
                ...state,
                products: action.payload
            }

        default:
            return state
    }
}
