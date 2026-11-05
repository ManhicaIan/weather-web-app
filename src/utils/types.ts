import type { IconType } from "react-icons";

export interface ButtonProps {
  icon: IconType;
  label: string;
}

export interface AirConditionsCardProps {
  label: string;
  icon: React.ComponentType;
  value: number;
  unit: string;
}

export interface DayForecastProps {
  day: string;
  icon: string;
  label: string;
  min: number;
  max: number;
}
export interface Days {
  datetime: string;
  conditions: string;
  precipprob: number;
  temp: number;
  tempmax: number;
  tempmin: number;
  windspeed: number;
  feelslike: number;
  uvindex: number;
  hours: {
    datetime: string;
    temp: number;
    icon: string;
    conditions: string;
  }[];
}
export interface WeatherData {
  address: string;
  days: Days[];
}


