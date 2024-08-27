import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productCode } = useParams();
    const [product, setProduct] = useState(null);

    const fetchProductDetails = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/products/${productCode}`);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Erro ao buscar detalhes do produto:', error);
        }
    }, [productCode]);

    useEffect(() => {
        fetchProductDetails();
    }, [fetchProductDetails]);

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R${product.price}</p>
        </div>
    );
};

export default ProductDetails;