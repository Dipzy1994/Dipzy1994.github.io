import React from 'react';  
import Header from './Header';  
import AboutUs from './AboutUs';  
import Events from './Events';  
import SignUp from './SignUp';  
import ContactUs from './ContactUs';  
import Footer from './Footer';  
import WeatherDashboard from './WeatherDashboard';  
import ErrorBoundary from './ErrorBoundary';  
  
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
