import React from 'react';

import MainHeader from './components/MainHeader.js';
import MainBody from './components/MainBody.js';
import MainFooter from './components/MainFooter.js';

import './App.css';

function App() {
  console.log('Please visit https://github.com/technicaldebtgames/TechDebt for this site\'s github repo. Feel free to send me a message if you\'d like to discuss opportunities, or would just like to chat.');
  return (
    <div className="App">
      <MainHeader />
      <MainBody />
      <MainFooter />
    </div>
  );
}

export default App;
