import React from 'react';
import logo from './logo.png';
import googleplay from './googleplay.png';
import appstore from './appstore.png';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import FancyButton from './FancyButton';
import ResponsiveNavbar from './ResponsiveNavbar';

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

  function handleClickEmail () {
    window.open("mailto:get.totms@gmail.com", '_blank');
  }

  function handleClickInsta () {
    window.open("https://www.instagram.com/totms.llc", '_blank');
  }

  function handleClickAppStore () {
    window.open("https://apps.apple.com/us/app/kicksville-festival/id6744125429", '_blank');
  }

  function handleClickGooglePlay () {
    window.open("https://play.google.com/store/apps/details?id=com.totem.kicksville&hl=en", '_blank');
  }

  return (
    <div className="App">
      <ResponsiveNavbar />
      <div className="main-page">
        <div id="home" className='section'>
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{fontSize: '18pt'}}>your festival app.</p>
        </div>
        <div id="about" className='section'>
          <div className="section-header">who we are</div>
          <p>We built TOTMS for festivals to reach their audiences.</p>
          <p>Need to make last minute schedule updates?  No problem.</p>
          <p>Accouncements about weather conditions?  You got it.</p>
          <p>Maps, artist info, FAQs, you name it.</p>
          <p>We tried to think of everything, and are working on new features every day.</p>
          <p>Built by festival-goers, for festival-goers.</p>
        </div>
        <div id="app" className='section'>
          <div className="section-header">the app</div>
          <p>Check out our first app, built for Kicksville Festival.</p>
          <div className="section-row">
          <img src={appstore} alt="app store" className="store-logo" onClick={handleClickAppStore} />
          <img src={googleplay} alt="google play" className="store-logo" onClick={handleClickGooglePlay} />
          </div>
        </div>
        <div id="contact" className='section'>
          <div className="section-header">contact us</div>
          <div className='section-row'>
            <FancyButton onClick={handleClickEmail} color="#ff1d8e" width={140} height={54} fontSize={20} borderWidth={9} buttonText='email' id='email' style={{marginRight: '24px'}} />
            <FancyButton onClick={handleClickInsta} color="#ff1d8e" width={140} height={54} fontSize={20} borderWidth={9} buttonText='instagram' id='instagram' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
