// interfaces/requestBody.ts

export interface CurrentWeatherRequest {
    city: string;
  }
  
  export interface HistoricalWeatherRequest {
    city: string;
    date: string;
  }

  
  export interface ForecastRequest {
    city: string;
    days: number;
  }