
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from '../components/layout/NavMenu';
import Footer from '../components/layout/Footer';
import LoadingSpinner from '../components/shared/LoadingSpinner';



function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

