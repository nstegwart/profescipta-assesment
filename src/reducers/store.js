import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import expireReducer from 'redux-persist-expire';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers'; 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [expireReducer('reducerKey', { expireSeconds: 3600 })],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };