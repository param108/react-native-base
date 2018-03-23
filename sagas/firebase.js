import { call, cancel, fork, put, race, take, select, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { eventChannel, END, delay } from 'redux-saga';
import firebase from '../firebase';

export function* workerReadOnce(action) {
}

function createUser(username, password) {
  return eventChannel(emitter=> {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(username,password)
            .then(credentials=> {
                emitter(credentials);
                emitter(END);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    //alert('The password is too weak.');
                } else {
                    //alert(errorMessage);
                }
                console.log(error);
                emitter(END);
            });
      return (()=>{});
    });
}

function signinUser(username, password) {
    return eventChannel(emitter=> {
        console.log(username,password);
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(username,password)
            .then(credentials=> {
                emitter(credentials);
                emitter(END);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                /*if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }*/
                console.log(error);
                emitter(END);
            });
        return (()=>{});
    });
}


export function* workerSignup(action) {
    yield put({type:'SHOW_WAIT'});
    const chan = yield call(createUser, action.username,action.password);
    try {    
        while (true) {
            // take(END) will cause the saga to terminate by jumping to the finally block
            let credentials = yield take(chan);
            yield put({type: "LOGIN_USER", payload: credentials});
            console.log(`signup: ${credentials}`);
        }
    } finally {
        console.log('signup terminated');
        yield put({type:'HIDE_WAIT'});
    }
}

export function* workerLogin(action) {
    yield put({type:'SHOW_WAIT'});
    const chan = yield call(signinUser, [action.username,action.password]);
    try {    
        while (true) {
            // take(END) will cause the saga to terminate by jumping to the finally block
            let credentials = yield take(chan);
            yield put({type: "LOGIN_USER", payload: credentials});
            console.log(`signup: ${credentials}`);
        }
    } finally {
        console.log('signup terminated');
        yield put({type:'HIDE_WAIT'});
    }
}

export function* firebaseSaga() {
    yield all([
      takeEvery('READ_FIREBASE_ONCE', workerReadOnce),
      takeLatest('LOGIN', workerLogin),
      takeLatest('SIGNUP', workerSignup)
    ]);
}
