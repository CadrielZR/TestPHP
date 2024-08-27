import React, { useState, useEffect } from 'react';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
        fetchWishlistItems();
    }, []);

    const fetchWishlistItems = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/wishlist-items');
            const data = await response.json();
            setWishlistItems(data);
        } catch (error) {
            console.error('Erro ao buscar itens da wishlist:', error);
        }
    };

    return (
        <div>
            <h2>Minha Wishlist</h2>
            <ul>
                {wishlistItems.map(item => (
                    <li key={item.id}>
                        <strong>Cliente:</strong> {item.client_name} <br />
                        <strong>Produto:</strong> {item.product_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
