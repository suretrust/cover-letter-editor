import React from 'react';

import '../styles/css/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Text from './Text';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Text />
      <Footer />
    </div>
  );
}

export default App;
