import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import TodayForecast from "../Forecast/TodayForecast";
import AirConditions from "../AirConditions/AirConditions";
import { useWeatherData } from "../../data/weather-api";
import { useWeatherContext } from "@/context/WeatherContext";

const MainContent = () => {
  const { country, currentCountry } = useWeatherContext();
  
  const { data: weatherData } = useWeatherData(currentCountry ? currentCountry : country);

  const { address, days } = weatherData || { address: "Mozambique", days: [] };
  const { temp, precipprob } = days?.[0] || {
    temp: 0,
    tempmax: 0,
    tempmin: 0,
    windspeed: 0,
    uvindex: 0,
  };

  return (
    <main className="flex flex-col flex-3 min-w-0 gap-4">
      <>
        <SearchBar />
        <CurrentWeather
          city={address}
          temp={temp}
          rainChance={precipprob ? precipprob : 0}
        />
        <TodayForecast days={days} />
        <AirConditions days={days} />
      </>
    </main>
  );
};

export default MainContent;
