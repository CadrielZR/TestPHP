// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.code}>
                        <Link to={`/products/${product.code}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
