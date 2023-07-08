import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Routes from "../src/components/Routes";

import './App.css';
import { useState } from "react";





function App() {
const [darkTheme,setDarkTheme]=useState(false);




  return (
  
  <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-500 dark:bg-gray-900 dark:text-gray-200 min-h-screen" >

          
       <Navbar/>
       <Footer/>
       <Routes/>
      </div>
        
    </div>
  
  );
}

export default App;
