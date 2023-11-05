<?php
namespace App\Services;

use App\Models\Destination;
use App\Models\Airport;
use App\Models\Flight;
use App\Models\City;

use Illuminate\Http\Request;

class FlightSearchService
{
    public function searchFlights(Request $request)
    {
        $flights = Flight::query();
        if (!$request->has(['depart', 'arrive'])) {
            return []; // ou une autre valeur par défaut
        }

        $departureAirportId = $this->getAirport($request->input('depart'));
        $arrivalAirportId = $this->getAirport($request->input('arrive'));

         // $flights_departure = $flights->where('departure_airport_id', $departureAirportId)
         // ->get()->pluck('id');
        $test = $flights->where('departure_airport_id', $departureAirportId)
        ->where('arrival_airport_id', $arrivalAirportId)
        ->get();

      //  $destination = Destination::whereIn('flight_id', $flights_departure)
       // ->where('arrival_airport_id',$arrivalAirportId)->get();

        return $test;


    }

    public function searchFlightss(Request $request)
    {

        $flights = Flight::query();

        if (!$request->has(['depart', 'arrive'])) {
            return []; // ou une autre valeur par défaut
        }

        $departureAirportId = $this->getAirport($request->input('depart'));
        $arrivalAirportId = $this->getAirport($request->input('arrive'));

         // $flights_departure = $flights->where('departure_airport_id', $departureAirportId)
         // ->get()->pluck('id');
        $test = $flights->where('departure_airport_id', $departureAirportId)
          ->whereHas('destinations', function ($query) use ($arrivalAirportId) {
            $query->where('arrival_airport_id', $arrivalAirportId);
        })->get();
      //  $destination = Destination::whereIn('flight_id', $flights_departure)
       // ->where('arrival_airport_id',$arrivalAirportId)->get();

        return $test;
    }


    private function getAirportIdFromCityName($cityName)
    {
        $city = City::where('name', $cityName)->first();

        if (!$city) {
            return null;
        }

        $airport = Airport::where('city_id', $city->id)->first();
        return $airport ? $airport->id : null;
    }
    private function getAirport($cityid)
    {
        $airport = Airport::where('city_id', $cityid)->first();
        return $airport ? $airport->id : null;
    }


}
