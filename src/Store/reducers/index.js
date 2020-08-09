import { combineReducers } from 'redux';
import productReducers from './product';

const reducers = combineReducers({
    products: productReducers
});

export default reducers;