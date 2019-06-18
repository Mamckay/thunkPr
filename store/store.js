import {createStore , applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import testReducer from './reducers/test';

const store = createStore(combineReducers({
    test: testReducer
}), applyMiddleware(thunk));

export default store;