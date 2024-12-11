 import React, { useEffect } from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

 // Styles
 import '../styles/App.css';
 import '../styles/NavMenu.css';

 // Components
 import NavMenu from '../components/layout/NavMenu';
 import Footer from '../components/layout/Footer';

 import Home from '../components/Home';
 import About from '../components/About';
 import Teams from '../components/Teams';
 import Events from '../components/Events';
 import Contact from '../components/Contact';
 import WeatherDashboard from '../components/WeatherDashboard';
 import Signup from '../components/Signup';
 import ErrorBoundary from '../components/ErrorBoundary';
 import SearchBar from '../components/shared/SearchBar';
 function App() {
   useEffect(() => {
     // Example of using effect for initial setup or data fetching
     console.log('App component mounted');
   }, []);

   const handleSearch = (term) => {
     // Implement search functionality here
     console.log(`Searching for: ${term}`);
   };
   return (
     <Router>
       <ErrorBoundary>
         <div className="app">
           <header>
             <div className="container">
               <div className="logo-container">
                 <img src="/logo.png" alt="FutureSports Logo" className="logo" />
                 <h1>FutureSports</h1>
               </div>
               <NavMenu />
               <SearchBar onSearch={handleSearch} />
             </div>
           </header>
           <main className="container">
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/teams" element={<Teams />} />
               <Route path="/events" element={<Events />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/weather" element={<WeatherDashboard />} />
               <Route path="/signup" element={<Signup />} />
             </Routes>
           </main>
           <Footer />
         </div>
       </ErrorBoundary>
     </Router>
   );
 }

 export default App;


