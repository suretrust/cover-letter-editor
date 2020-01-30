import React from 'react';
import '../styles/css/App.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="wrapper">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
