import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Contact = lazy(() => import('../components/Contact'));
const SignUp = lazy(() => import('../components/SignUp'));

function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
