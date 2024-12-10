import React from 'react';  
import Header from '../components/Header'; 
import AboutUs from '../components/AboutUs';  
import Events from '../components/Events';  
import Signup from '../components/Signup';
import ContactUs from '../components/ContactUs';  
import Footer from '../components/Footer';  
import WeatherDashboard from '../components/WeatherDashboard';  
import ErrorBoundary from '../components/ErrorBoundary';  
  
function App() {  
  return (  
   <div>  
    <ErrorBoundary>  
      <Header />  
      <AboutUs />  
      <Events />  
      <SignUp />  
      <ContactUs />  
      <WeatherDashboard />  
      <Footer />  
    </ErrorBoundary>  
   </div>  
  );  
}  
  
export default App;
