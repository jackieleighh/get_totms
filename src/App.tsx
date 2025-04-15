import React from 'react';
import logo from './logo.png';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import FancyButton from './FancyButton';

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

  function handleClick () {
    window.open("mailto:get.totms@gmail.com", '_blank');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>your music festival app.</p>
        <div style={{height:"20px"}} />
        <FancyButton onClick={handleClick} color="#ff1d8e" width={140} height={54} fontSize={20} borderWidth={9} buttonText='contact us' />
      </header>
    </div>
  );
}

export default App;
