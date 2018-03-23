import { fork, all } from 'redux-saga/effects';
//import codePushSaga from 'react-native-code-push-saga';
import { firebaseSaga } from './firebase';

export default function* rootSaga() {
    yield all([
    //fork(codePushSaga),
    fork(firebaseSaga)
    ]);
}
