import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));
const Teams = lazy(() => import('../components/Teams'));
const Events = lazy(() => import('../components/Events'));

function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/teams" component={Teams} />
            <Route path="/events" component={Events} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

