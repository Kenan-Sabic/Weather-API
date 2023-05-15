// interfaces/responseBody.ts
export interface CurrentWeatherResponse {
    temperature: number;
    description: string;
    windSpeed: number;
    cityName: string;
    countryCode: string;
  }
  

export interface forecastResponseBody {

    dayOne : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
    dayTwo : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
    dayThree : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
    dayFour : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
    dayFive : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
}

export interface historicalResponseBody {
    dayOne : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
    dayTwo : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
    dayThree : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
    dayFour : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };
    dayFive : {
        airTemperature : string;
        precipitation : string;
        pressure : string;
        humidity : string;
        date : string;
    };




}
export interface errorResponseBody {
    error : string;
}