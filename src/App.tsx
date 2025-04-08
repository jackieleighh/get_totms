import React from 'react';
import logo from './logo.png';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCejKt51ohp5WEk-9Q2Z7GEhhD4JJ5diHU",
  authDomain: "totms-app.firebaseapp.com",
  projectId: "totms-app",
  storageBucket: "totms-app.firebasestorage.app",
  messagingSenderId: "939986964225",
  appId: "1:939986964225:web:a4a8e53ecc61256170d500",
  measurementId: "G-PVE1DECGB7"
};

function App() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your music festival app.
        </p>
        <a
          className="App-link"
          href="mailto:get.totms@gmail.com"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
