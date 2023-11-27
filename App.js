import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/reducers/store'; // Sesuaikan path file dengan path yang sesuai

import AppNavigator from './src/screens/App'; // Ganti dengan nama file navigator Anda
import { networkDebugger } from './src/shared/networkDebugger';

export default function App() {

  useEffect(() => {
    networkDebugger()
  }, [])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}