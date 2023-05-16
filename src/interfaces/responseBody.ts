// interfaces/responseBody.ts
export interface CurrentWeatherResponse {
    temperature: number;
    description: string;
    windSpeed: number;
    cityName: string;
    countryCode: string;
  }
  

  export interface ForecastResponseBody {
    forecast: {
      date: string;
      temperature: number;
      description: string;
      windSpeed: number;
    }[];
  }
  


  export interface HistoricalWeatherResponse {
    cityName: string;
    historicalData: HistoricalData[];
  }
  
  export interface HistoricalData {
    date: string;
    temperature: number;
    description: string;
    windSpeed: number;
    precipitation: number;
    pressure: number;
    humidity: number;
  }




export interface errorResponseBody {
    error : string;
}