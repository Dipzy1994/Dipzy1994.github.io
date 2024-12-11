import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavMenu from '../components/layout/NavMenu';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/styles.css'; // Make sure to import your main CSS file

const Home = lazy(() => import('../components/Home'));
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Contact = lazy(() => import('../components/Contact'));
const SignUp = lazy(() => import('../components/Signup'));
const SignIn = lazy(() => import('../components/SignIn'));
const Teams = lazy(() => import('../components/Teams'));
const Events = lazy(() => import('../components/Events'));
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <ErrorBoundary>
        <div>
          <NavMenu isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/events" element={<Events />} />
              <Route path="/signup" element={<SignUp />} />
              <Route 
                path="/signin" 
                element={
                  isAuthenticated ? 
                    <Navigate to="/" replace /> : 
                    <SignIn onSignIn={handleSignIn} />
                } 
              />
            </Routes>
          </Suspense>
        </div>
      </ErrorBoundary>
    </Router>
  );
}


export default App;
