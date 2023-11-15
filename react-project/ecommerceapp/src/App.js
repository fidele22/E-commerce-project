import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar/Navbar';
import Home from './pages/Home';
import ShopCategory from './pages/ShopCategory';
import Loginsignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house" element={<ShopCategory />} />
          <Route path="/land" element={<ShopCategory />} />
          <Route path="/login" element={<Loginsignup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
     
    </Router>
   
  );
}

export default App;
