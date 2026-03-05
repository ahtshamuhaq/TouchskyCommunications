import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./MainPages/HomePage";
import About from "./MainPages/About";
import ServicesPage from "./MainPages/Services";
import PricingPage from "./MainPages/Pricing";
import ContactPage from "./MainPages/Contact";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
