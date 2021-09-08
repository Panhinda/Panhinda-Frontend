//import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import { createStore,  applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage' //
import CombinedReducers from './reducers/index';
import { composeWithDevTools } from "redux-devtools-extension";


const persistConfig = {

    key: 'root',
    storage,

}

const persistedReducer = persistReducer(persistConfig, CombinedReducers)


const fn = () => {
    //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)))
    let persistor = persistStore(store)
    return { store, persistor }
}
export default fn;
