import { createStore, combineReducers, } from 'redux';
import userReducer from '../store/modules/cart/reducer'

const combine = combineReducers({
    produto: userReducer,
})

const store = createStore(combine);

export default store;