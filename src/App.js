import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavMenu, Footer, LoadingSpinner } from './components/SharedComponents';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Teams = lazy(() => import('./components/Teams'));
const Events = lazy(() => import('./components/Events'));

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
