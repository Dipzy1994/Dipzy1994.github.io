import React from 'react';  
import logo from '../images/image1.jpg';  
import SearchBar from './SearchBar';  
import NavMenu from './NavMenu';  
  
function Header() {  
  return (  
   <header>  
    <div className="logo-container">  
      <img src={logo} alt="Macarthur Ballers" className="logo" />  
      <span className="club-name">Macarthur Ballers</span>  
    </div>  
    <nav>  
      <SearchBar />  
      <NavMenu />  
    </nav>  
   </header>  
  );  
}  
  
export default Header;
