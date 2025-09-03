import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'


import App from './App.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import BookTable from './pages/BookTable.jsx';
import OurMenu from './pages/OurMenu.jsx';
import Gallery from './pages/Gallery.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/our-menu" element={<OurMenu />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
