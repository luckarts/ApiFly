<?php
namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;


class AmadeusService {

    protected $client;

    public function getClient()
    {

        if (!$this->client) {
            $amadeus_token = session()->get('amadeus_token');

            if (!$amadeus_token || !session()->has('token_expiry') || now()->gte(session('token_expiry'))) {
                $this->refreshToken();
                $amadeus_token = session()->get('amadeus_token');
            }

            $this->client = new Client([
                'base_uri' => 'https://test.api.amadeus.com/',
                'headers' => [
                    'Authorization' => 'Bearer ' .$amadeus_token
                ]
            ]);
        }

        return $this->client;
    }

    public function refreshToken()
    {
        $client_id = env('AMADEUS_CLIENT_ID');
        $client_secret = env('AMADEUS_CLIENT_SECRET');

        $url= 'https://test.api.amadeus.com/v1/security/oauth2/token';
        $response = Http::asForm()->post($url, [
            'client_id' => $client_id,
            'client_secret' => $client_secret,
            'grant_type' => 'client_credentials'
        ]);

        $token = $response->json()['access_token'];
        $expiry = now()->addSeconds($response->json()['expires_in']);
        session(['amadeus_token' => $token, 'token_expiry' => $expiry]);
    }

        public function getFlightDestinations($origin, $maxPrice)
        {
            $response = $this->getClient()->request('GET', 'v1/shopping/flight-destinations', [
                'query' => [
                    'origin' => $origin,
                    'maxPrice' => $maxPrice
                ]
            ]);
            return json_decode($response->getBody(), true);
        }

        public function getPopularFlights($city)
        {
            try{
                $response = $this->getClient()->request('GET', '/v1/shopping/flight-destinations', [
                    'query' => [
                        'origin' => $city,

                    ]
                ]);

            } catch (\GuzzleHttp\Exception\ClientException $e) {
                $responseBody = $e->getResponse()->getBody()->getContents();
                dd($responseBody); // Affichez le corps de la réponse pour obtenir des détails sur l'erreur
            }
            return json_decode($response->getBody(), true);
        }

        public function getLocal($city,$date)
        {
            try{
                $response = $this->getClient()->request('GET', ' /v2/shopping/flight-offers', [
                    'query' => [
                        'originLocationCode' => $city,
                        "departureDate"=>$date

                    ]
                ]);

            } catch (\GuzzleHttp\Exception\ClientException $e) {
                $responseBody = $e->getResponse()->getBody()->getContents();
                dd($responseBody); // Affichez le corps de la réponse pour obtenir des détails sur l'erreur
            }
            return json_decode($response->getBody(), true);
        }


        ///v1/travel/analytics/air-traffic/booked

        public function getCodeIATA($city)
        {
                $response = $this->getClient()->request('GET', '/v1/reference-data/locations', [
                    'query' => [
                        'subType' => "CITY",
                        "keyword"=> $city

                    ]
                ]);
            return json_decode($response->getBody(), true);
        }

}

/*
} catch (\GuzzleHttp\Exception\ClientException $e) {
                $responseBody = $e->getResponse()->getBody()->getContents();
                dd($responseBody); // Affichez le corps de la réponse pour obtenir des détails sur l'erreur
            }
*/
