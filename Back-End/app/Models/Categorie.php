<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{

    protected $table = 'categories';
    protected $primaryKey = 'id_categorie';

    public function produits()
    {
        return $this->hasMany(Produit::class, 'id_categorie');
    }
}
