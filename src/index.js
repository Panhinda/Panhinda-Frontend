import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { composeWithDevTools } from "redux-devtools-extension";
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Reducers from './redux/reducers/index';
import { Provider } from 'react-redux';
//import { applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from './redux/store';

const { store, persistor } = createStore();




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
