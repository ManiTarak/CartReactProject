import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBq0G4B3Ck6UChkvrWewYZitJnkX5zohHg",
  authDomain: "cartapp-90371.firebaseapp.com",
  projectId: "cartapp-90371",
  storageBucket: "cartapp-90371.appspot.com",
  messagingSenderId: "15382745781",
  appId: "1:15382745781:web:17c3e545fc68541c3b64fc",
  measurementId: "G-WWD7N8LB91"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default app;
