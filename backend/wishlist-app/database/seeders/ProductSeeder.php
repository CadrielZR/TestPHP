<?php

// database/seeders/ProductSeeder.php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'code' => 'P001',
                'name' => 'Smartphone XYZ',
                'description' => 'Um smartphone com tela de 6.5 polegadas e 128GB de armazenamento.',
                'price' => 1299.99,
            ],
            [
                'code' => 'P002',
                'name' => 'Laptop ABC',
                'description' => 'Um laptop poderoso com processador Intel i7 e 16GB de RAM.',
                'price' => 2499.99,
            ],
            [
                'code' => 'P003',
                'name' => 'Fone de Ouvido DEF',
                'description' => 'Fones de ouvido sem fio com cancelamento de ruído.',
                'price' => 299.99,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
