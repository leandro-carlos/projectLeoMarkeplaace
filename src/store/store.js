import { createStore } from 'redux';
import rootRedux from './modules/rootRedux';

const store = createStore(rootRedux);

export default store;