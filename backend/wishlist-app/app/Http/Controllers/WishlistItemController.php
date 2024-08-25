<?php

namespace App\Http\Controllers;

use App\Models\WishlistItem;
use Illuminate\Http\Request;

class WishlistItemController extends Controller
{
    // Listar todos os itens da wishlist
    public function index()
    {
        $wishlistItems = WishlistItem::all();
        return response()->json($wishlistItems);
    }

    // Adicionar um novo item à wishlist
    public function store(Request $request)
    {
        // Validação dos dados recebidos
        $validatedData = $request->validate([
            'client_code' => 'required|string',
            'client_name' => 'required|string',
            'product_code' => 'required|string',
            'product_name' => 'required|string',
        ]);

        // Criação do item na wishlist
        $wishlistItem = WishlistItem::create($validatedData);

        // Retorno do item criado
        return response()->json($wishlistItem, 201);
    }
}
