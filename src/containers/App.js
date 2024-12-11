 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Header from '../components/layout/Header';
 import Footer from '../components/layout/Footer';
 import Home from '../components/Home';
 import About from '../components/About';
 import Teams from '../components/Teams';
 import Events from '../components/Events';
 import Contact from '../components/Contact';
 import WeatherDashboard from '../components/WeatherDashboard';
 import Services from '../components/Services';
 import SignUp from '../components/Signup'; // Updated import
 import SearchResults from '../components/SearchResults';
 import ErrorBoundary from '../components/ErrorBoundary';

 function App() {
   return (
     <Router>
       <ErrorBoundary>
         <div className="App">
           <Header />
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/teams" element={<Teams />} />
             <Route path="/events" element={<Events />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/weather" element={<WeatherDashboard />} />
             <Route path="/services" element={<Services />} />
             <Route path="/signup" element={<SignUp />} />
             <Route path="/search" element={<SearchResults />} />
           </Routes>
           <Footer />
         </div>
       </ErrorBoundary>
     </Router>
   );
 }

 export default App;

