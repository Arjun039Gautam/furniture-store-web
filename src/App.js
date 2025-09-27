import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import ScrollToTop from "./components/scrolltotop"; // Import the component

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <main style={{ minHeight: "80vh"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;