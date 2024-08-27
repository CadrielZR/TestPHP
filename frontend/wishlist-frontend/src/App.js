// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './components/ProductDetails';
import WishlistPage from './pages/WishlistPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/products">Produtos</Link>
                    <Link to="/wishlist">Wishlist</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:productCode" element={<ProductDetails />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
