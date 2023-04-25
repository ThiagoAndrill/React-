import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from "./paginas/home/Home"
import Login from "./paginas/login/Login"
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>

      <Routes>
          <Route path="/" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
