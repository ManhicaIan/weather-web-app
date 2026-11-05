import { createContext, useContext, useState } from "react";

interface WeatherContextType {
  city: string;
  setcity: (city: string) => void;
  currentCity: string;
  setCurrentCity: (city: string) => void;
}

const WeatherContext = createContext<WeatherContextType | null>(null);

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [city, setcity] = useState<string>("Maputo");
  const [currentCity, setCurrentCity] = useState<string>(city);

  return (
    <WeatherContext.Provider
      value={{ city, setcity, currentCity, setCurrentCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);

  if (context === null)
    throw new Error("useWeatherContext must be used within a WeatherProvider");

  return context;
}
