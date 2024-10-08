import * as React from "react";
 import { BrowserRouter,Routes,Route} from "react-router-dom";
 
import 'bootstrap/dist/css/bootstrap.min.css';
 //pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./conponents/Navbar";
 
 
 

 

function App() {
  

  return (
    <div class="container">
      
      
<BrowserRouter>
         <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Blog" element={<Blog/>}> </Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Profile" element={<Profile/>}> </Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/About" element={<About/>}> </Route>
        <Route path="*" element={<Error/>}> </Route>
      
      </Routes>
    </BrowserRouter>



      </div>
 )
  }
 
export default App;

 