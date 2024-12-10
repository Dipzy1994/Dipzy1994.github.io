import React from 'react';  
  
function SearchBar() {  
  const [searchQuery, setSearchQuery] = React.useState('');  
  
  const handleSearch = (query) => {  
   setSearchQuery(query);  
  };  
  
  return (  
   <div>  
    <input  
      type="text"  
      value={searchQuery}  
      onChange={(e) => handleSearch(e.target.value)}  
      placeholder="Search..."  
    />  
   </div>  
  );  
}  
  
export default SearchBar;
