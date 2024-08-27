<?php
// app/Http/Controllers/ProductController.php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
// app/Http/Controllers/ProductController.php

public function index()
{
    return response()->json(Product::all());
}

    public function show($code)
    {
        return Product::where('code', $code)->first();
    }
}
