import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NavMenu from '../components/layout/NavMenu';

const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Contact = lazy(() => import('../components/Contact'));
const SignUp = lazy(() => import('../components/SignUp'));
const SignIn = lazy(() => import('../components/SignIn'));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = (token) => {
    // Store the token in localStorage or a secure storage method
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // Remove the token from storage
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <div>
        <NavMenu isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={SignUp} />
            <Route 
              path="/signin" 
              render={(props) => 
                isAuthenticated ? (
                  <Redirect to="/" />
                ) : (
                  <SignIn {...props} onSignIn={handleSignIn} />
                )
              } 
            />
            {/* Add more protected routes here */}
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;


