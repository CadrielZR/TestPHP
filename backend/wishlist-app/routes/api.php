<?php

use App\Http\Controllers\WishlistItemController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Facade as Route;

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{code}', [ProductController::class, 'show']);
Route::get('/wishlist-items', [WishlistItemController::class, 'index']);
Route::post('/wishlist-items', [WishlistItemController::class, 'store']);
