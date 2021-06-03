import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react"
import { Provider } from "react-redux";
import { configureStore } from "./store"
import './index.css';
import App from './App';

const store = configureStore();
// when page is refreshed todos stay 
const persistor = persistStore(store)
ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<div>Loading....</div>}>
      <App />
    </PersistGate>

  </Provider>,
  document.getElementById('root')
);

