import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
  
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center boder-b dark:boder-gray-700 boder-gray-200" >
      
     <div className="flex justify-between items-center space-x-5 w-screen">


<Link to="/">
<p className='text-2xl' >
google icon-serch

</p>


</Link>


       
     </div>
    </div>
   
  )
}

export default Navbar
