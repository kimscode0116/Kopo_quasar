import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAoUjFE-XXahF3ictGM-vCaJJ_Y4m7e-Ls",
    authDomain: "firstfirebase-17993.firebaseapp.com",
    projectId: "firstfirebase-17993",
    storageBucket: "firstfirebase-17993.appspot.com",
    messagingSenderId: "993458882938",
    appId: "1:993458882938:web:5726537499c0f989496ec3" 
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

export const auth = firebase.auth();
export const g_auth = firebase.auth;
export const db = firebase.firestore();
