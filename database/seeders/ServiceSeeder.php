<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $services = [
            [
                'title' => json_encode(['fr' => 'Assurance auto']),
                'body' => json_encode(['fr' => 'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.']),
                'icon' => 'car',
            ],
            [
                'title' => json_encode(['fr' => 'Assurance vie']),
                'body' => json_encode(['fr' => 'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.']),
                'icon' => 'users',
            ],
            [
                'title' => json_encode(['fr' => 'Assurance santé']),
                'body' => json_encode(['fr' => 'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.']),
                'icon' => 'medkit',
            ],
            [
                'title' => json_encode(['fr' => 'Assurance habitation']),
                'body' => json_encode(['fr' => 'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.']),
                'icon' => 'home',
            ],
            [
                'title' => json_encode(['fr' => 'Assurance entreprise']),
                'body' => json_encode(['fr' => 'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.']),
                'icon' => 'building',
            ],
            [
                'title' => json_encode(['fr' => 'Assurance voyage']),
                'body' => json_encode(['fr' => 'Aliquam posuere gravida wolf moon retro. Hella ironic before they sold out pitchfork gastropub dreamccher. gravida vitae euismod quis felis.']),
                'icon' => 'plane',
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
