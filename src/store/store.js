import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from "../reducers/authReducer";
import { postReducer } from "../reducers/postReducer";
import storage from 'redux-persist/lib/storage'



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth', 'post']
}

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)));

export const persistor = persistStore(store)