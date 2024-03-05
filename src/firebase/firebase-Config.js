// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD3-zwdIzXQn48tecZMVtzvnwmb3cWEA3E',
    authDomain: 'chatter-testing-app.firebaseapp.com',
    projectId: 'chatter-testing-app',
    storageBucket: 'chatter-testing-app.appspot.com',
    messagingSenderId: '109171534547',
    appId: '1:109171534547:web:c9acc3e6625820e6ad4226',

//     VITE_APP_API_KEY=AIzaSyD3-zwdIzXQn48tecZMVtzvnwmb3cWEA3E
// VITE_APP_AUTH_DOMAIN=chatter-testing-app.firebaseapp.com
// VITE_APP_PROJECT_ID=chatter-testing-app
// VITE_APP_STORAGE_BUCKET=chatter-testing-app.appspot.com
// VITE_APP_MESSAGING_SENDER_ID=109171534547
// VITE_APP_APP_ID=1:109171534547:web:c9acc3e6625820e6ad4226


    // apiKey: import.meta.env.VITE_APP_API_KEY,
    // authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    // projectId: import.meta.env.VITE_APP_PROJECT_ID,
    // storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    // appId: import.meta.env.VITE_APP_APP_ID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication
const auth = getAuth(app);

// Initialize Firestore
const firestoreDB = getFirestore(app);

export { auth, firestoreDB };