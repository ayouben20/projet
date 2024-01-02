<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    // use HasFactory; // uncomment this if you are using Laravel 8 or higher
    protected $table = 'produits'; // change this to match your table name
    protected $primaryKey = 'id'; // change this to match your primary key name

    public function categorie()
    {
        return $this->belongsTo(Categorie::class, 'id_categorie'); // change this to match your foreign key name
    }
}
