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



 function App() {
   return (
     <Router>
       <div className="app">
         {/* Your existing app content */}
       </div>
     </Router>
   );
 }

 export default App;

