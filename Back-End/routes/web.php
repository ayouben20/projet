<?php

use App\Models\Categorie;
use App\Models\Produit;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/allProducts', function () {
    $products = Produit::with('categorie')->get();
    return $products;
});

Route::get('/product/{id}', function ($id) {
    $product = Produit::with('categorie')->find($id);
    return $product;
});

Route::get('/allCategories', function () {
    $categories = Categorie::with('produits')->get();
    return $categories;
});

Route::get('/users', function () {
    $users = Utilisateur::all();
    return response()->json($users);
});
