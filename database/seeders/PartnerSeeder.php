<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $partners = [
            [
                'name' => 'Activa',
                'photo' => 'Logo-ACTIVA-min-p1jxtcsr7xgt0wlaeg417vmjwz4ema4plle4jpbqio.png',
            ],
            [
                'name' => 'AGC',
                'photo' => 'agc.png',
            ],
            [
                'name' => 'Allianz',
                'photo' => 'allianz-logo.svg',
            ],
            [
                'name' => 'AREA',
                'photo' => 'area.jpg',
            ],
            [
                'name' => 'GMC',
                'photo' => 'Logo-officiel-GMC.png',
            ],
            [
                'name' => 'Chanas Assurances SA',
                'photo' => 'Logo-administration_chanas-assurances_Cameroun.png',
            ],
            [
                'name' => 'AXA',
                'photo' => 'footer_axa.jpg',
            ],
            [
                'name' => 'NSIA Assurances',
                'photo' => 'logo245x125.png',
            ],
            [
                'name' => 'Pro Assur',
                'photo' => 'PAS-Logo-1.png',
            ],
            [
                'name' => 'Prudential Beneficial',
                'photo' => 'PB-Life-Insurnance-CMYK.jpg',
            ],
            [
                'name' => 'Royal Onyx Insurance',
                'photo' => '1536349237134.jpg',
            ],
            [
                'name' => 'Sanlam',
                'photo' => '45451740-36700966.jpg',
            ],
            [
                'name' => 'SUNU Assurances',
                'photo' => 'Logo_SUNU.jpg',
            ],
            [
                'name' => 'Zenithe Insurance SARL',
                'photo' => 'logo.png',
            ],
        ];

        foreach ($partners as $partner) {
            Partner::create($partner);
        }
    }
}
