import { createContext, useContext, useState } from "react";

interface WeatherContextType {
  country: string;
  setCountry: (country: string) => void;
  currentCountry: string;
  setCurrentCountry: (country: string) => void;
}

const WeatherContext = createContext<WeatherContextType | null>(null);

export function WeatherProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountry] = useState<string>("Maputo");
  const [currentCountry, setCurrentCountry] = useState<string>(country);

  return (
    <WeatherContext.Provider
      value={{ country, setCountry, currentCountry, setCurrentCountry }}
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
