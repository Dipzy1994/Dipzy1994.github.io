import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Events from './components/Events';
import Teams from './components/Teams';

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

