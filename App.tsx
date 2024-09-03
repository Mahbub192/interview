import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainScreen from './src/component/MainScreen';

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}