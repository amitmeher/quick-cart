import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './data/initialStateData';
import reducers from './reducers';

const middleware = [thunk];

const store = createStore(reducers, initialState, applyMiddleware(...middleware));

export default store;