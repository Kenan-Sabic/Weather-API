// interfaces/requestBody.ts

export interface CurrentWeatherRequest {
    city: string;
  }
  
  export interface HistoricalWeatherRequest {
    city: string;
    startDate: string;
    endDate: string;
  }
  
  export interface ForecastRequest {
    city: string;
    days: number;
  }