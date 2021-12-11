import React from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
