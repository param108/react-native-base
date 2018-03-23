import { createStore, compose, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import rootSaga from '../sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  applyMiddleware(sagaMiddleware)
));



module.exports = {store};


