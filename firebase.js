import * as firebase from 'firebase';
import {FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_BUCKET} from './configs';

// Initialize Firebase
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    storageBucket: FIREBASE_BUCKET
};

firebase.initializeApp(firebaseConfig);

export default firebase;
