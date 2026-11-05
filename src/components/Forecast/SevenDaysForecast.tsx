import DayForecastCard from "./DayForecastCard";
import Sun from "../../assets/sun.svg";
import Title from "../main/Title";
import { useWeatherContext } from "@/context/WeatherContext";
import { useWeatherData } from "@/data/weather-api";

const SevenDaysForecast = () => {
  const { country } = useWeatherContext();
  const { data: weatherData } = useWeatherData(country || "Mozambique");

  const { days } = weatherData || { days: [] };
  
  const forecastDays = days?.slice(0, 7) || [];

  
  return (
    <section className="flex flex-col gap-2 mt-11 flex-1 p-5 bg-ui-secondary text-ui-text-primary rounded-[10px]">
      <Title>7-Day Forecast</Title>
      <section className="flex flex-col justify-between gap-4 overflow-x-auto">
        
        {forecastDays.map((day, index) => (
          <DayForecastCard
            key={index}
            day={day.datetime}
            icon={Sun}
            label={day.conditions.split(",")[0]}
            max={day.tempmax}
            min={day.tempmin}
          />
        ))}
      </section>
    </section>
  );
};

export default SevenDaysForecast;
