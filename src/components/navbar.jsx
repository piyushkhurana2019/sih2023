import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <div className="navbar">     
        <div className="searchcontainer">
   
        <img src="/img/logoSIH.png" alt="jai baba ki" />
      <div className="search-bar">
        <input type="text" placeholder="Search for Products, Brands and More" />
        <button type="submit">Search</button>
      </div>
      </div> 
      </div>
    );
  }
  
  export default Navbar;