// src/components/AddWishlistItem.js
import React, { useState } from 'react';

const AddWishlistItem = ({ onAdd }) => {
    const [clientCode, setClientCode] = useState('');
    const [clientName, setClientName] = useState('');
    const [productCode, setProductCode] = useState('');
    const [productName, setProductName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { client_code: clientCode, client_name: clientName, product_code: productCode, product_name: productName };

        try {
            const response = await fetch('http://localhost:8000/api/wishlist-items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });

            const data = await response.json();
            onAdd(data);

            setClientCode('');
            setClientName('');
            setProductCode('');
            setProductName('');
        } catch (error) {
            console.error('Erro ao adicionar item à wishlist:', error);
        }
    };

    return (
        <div>
            <h2>Adicionar Item à Wishlist</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Código do Cliente"
                    value={clientCode}
                    onChange={(e) => setClientCode(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nome do Cliente"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Código do Produto"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default AddWishlistItem;
