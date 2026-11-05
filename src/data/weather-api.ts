import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { WeatherData } from "../utils/types";

const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

async function fetchWeatherData(city: string): Promise<WeatherData> {
  const { data } = await axios.get<WeatherData>(
    `${BASE_URL}/${encodeURIComponent(city)}`,
    {
      params: {
        unitGroup: "metric",
        key: import.meta.env.VITE_WEATHER_API_KEY,
        contentType: "json",
      },
    },
  );
  return data;
}

export function useWeatherData(city: string) {
  return useQuery({
    queryKey: ["weatherData", city],
    queryFn: () => fetchWeatherData(city),
    enabled: !!city,
    staleTime: 1000 * 60 * 5,
  });
}