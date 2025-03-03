import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from '../pages/home/Home.jsx'
import { Store } from '../pages/store/Store.jsx'
import { Writers } from "../pages/writers/Writers.jsx";
import { Contact } from "../pages/contact/Contact.jsx";

const Router = () => { 
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store/>} />
        <Route path="/writers" element={<Writers />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </HashRouter> 
  )
}

export { Router }
