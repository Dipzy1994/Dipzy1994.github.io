import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
