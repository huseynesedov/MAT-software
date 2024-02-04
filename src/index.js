// Example structure in App.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './Laungage/i18n';


import Home from './App';
import Proje from './Pages/Projects/proje';
import About from './Pages/About/about';
import Servis from './Pages/Servis/servis';



import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function Index() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Proje />} />
          <Route path="/About" element={<About />} />
          <Route path="/Servis" element={<Servis />} />

        </Routes>
        <ScrollToTop />
      </Router>
    </I18nextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);