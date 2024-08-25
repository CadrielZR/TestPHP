use App\Http\Controllers\WishlistItemController;

Route::get('/wishlist-items', [WishlistItemController::class, 'index']);
Route::post('/wishlist-items', [WishlistItemController::class, 'store']);
