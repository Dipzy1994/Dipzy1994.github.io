 import React from 'react';
 import { HashRouter as Router, Route, Routes } from 'react-router-dom';

 // Styles
 import '../styles/App.css';

 // Components
 import NavMenu from '../components/layout/NavMenu';
 import Footer from '../components/layout/Footer';
 import SearchBar from '../components/shared/SearchBar';

 import Home from '../components/Home';
 import About from '../components/About';
 import Teams from '../components/Teams';
 import Events from '../components/Events';
 import Contact from '../components/Contact';
 import WeatherDashboard from '../components/WeatherDashboard';
 import Services from '../components/Services';
 import Signup from '../components/Signup';
 import SearchResults from '../components/SearchResults';
 import ErrorBoundary from '../components/ErrorBoundary';

 function AppContent() {
   const [searchResults, setSearchResults] = React.useState([]);

   const handleSearch = (searchTerm) => {
     // This is a simple search implementation. You might want to improve this
     // based on your actual content and requirements.
     const results = [
       { title: 'Home', path: '/' },
       { title: 'About', path: '/about' },
       { title: 'Teams', path: '/teams' },
       { title: 'Events', path: '/events' },
       { title: 'Contact', path: '/contact' },
       { title: 'Weather', path: '/weather' },
       { title: 'Services', path: '/services' },
       { title: 'Sign Up', path: '/signup' },
     ].filter(item => 
       item.title.toLowerCase().includes(searchTerm.toLowerCase())
     );

     setSearchResults(results);
   };

   return (
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
             <Route path="/services" element={<Services />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/search" element={<SearchResults results={searchResults} />} />
           </Routes>
         </main>
         <Footer />
       </div>
     </ErrorBoundary>
   );
 }

 function App() {
   return (
     <Router>
       <AppContent />
     </Router>
   );
 }
 export default App;

