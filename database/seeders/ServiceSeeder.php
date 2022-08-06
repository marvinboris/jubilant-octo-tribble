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
                'title' => json_encode(['fr' => 'Assurance dommages']),
                'body' => json_encode(['fr' => '<strong>Entreprises</strong>: Tous Risques Chantier - Tous Risques Montage Essais  - Multirisque Dommages  - Marchandises en Stocks - Marchandises en cours de transport - Pertes d’Exploitation.<br /><br /><strong>Particuliers</strong>: Multirisque habitation - Individuelle accidents - Assurance Automobile - Individuelle Aviation - Bateaux de Plaisance.']),
                'icon' => 'car-crash',
            ],
            [
                'title' => json_encode(['fr' => 'Assurance de responsabilité']),
                'body' => json_encode(['fr' => '<strong>Entreprises</strong>: Responsabilité Civile Chef d’Entreprise - Responsabilisé Civile avant et après livraison - Garantie Défense et Recours - Responsabilité Civile Diverses.<br /><br /><strong>Particuliers</strong>: Responsabilité Civile Chef de Famille - Garantie Défense et Recours']),
                'icon' => 'user-tie',
            ],
            [
                'title' => json_encode(['fr' => 'Assurance de personnes']),
                'body' => json_encode(['fr' => 'Maladie Groupe - Assistance et /ou Evacuation Sanitaire - Complément d’Avis Médical -Individuelle Accident - Crédit Banque - Temporaire Décès - Frais Funéraires - Assurance Voyage.']),
                'icon' => 'users',
            ],
            [
                'title' => json_encode(['fr' => 'Capitalisation']),
                'body' => json_encode(['fr' => 'Retraite Individuelle - Retraite Education - Retraite Entreprise – Assurance-Crédit – Assurance Vie.']),
                'icon' => 'user',
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
