import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCe4bpI7MIRN-heK3D9z1FtfN2qw-wxTyM",
  authDomain: "cart-app-d9c12.firebaseapp.com",
  projectId: "cart-app-d9c12",
  storageBucket: "cart-app-d9c12.appspot.com",
  messagingSenderId: "100496702622",
  appId: "1:100496702622:web:d2176a1e7e74d54b1c0f8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

