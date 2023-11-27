import { createStore, applyMiddleware } from 'redux';
import rootReducer from './combineReducer'; // Ganti dengan path ke file reducers Anda
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;