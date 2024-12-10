import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Header from './Header';
import NavMenu from './NavMenu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Events from './Events';
import Teams from './Teams';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Header />
          <NavMenu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/events" component={Events} />
            <Route path="/teams" component={Teams} />
          </Switch>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

