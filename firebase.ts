import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB8BPZxcDLDso2ObH2Fvi6jP2zd9w2u61k",
    authDomain: "nextjs-project-98c7e.firebaseapp.com",
    projectId: "nextjs-project-98c7e",
    storageBucket: "nextjs-project-98c7e.appspot.com",
    messagingSenderId: "1029231475277",
    appId: "1:1029231475277:web:91d8be8e454054ca74fa04",
    measurementId: "G-VWMK4N1127"
    /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-VWMK4N1127"*/
};
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth=getAuth(firebaseApp)
