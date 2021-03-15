import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers/index';
import rootSaga from './sagas';
import { initSocket } from './api/ws/socketController';


const sagaMiddleware=createSagaMiddleware();

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga,store.dispatch);

initSocket(store);

export default store;




