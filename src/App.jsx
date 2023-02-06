import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import Pages components
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Links from "./pages/Links/Links";
import NotFound from "./pages/NotFound"

function App() {
  const { pathname, hash, key } = useLocation();
  
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
