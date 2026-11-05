import Sun from "../../assets/sun.svg";

interface CurrentWeatherProps {
  city: string;
  temp: number;
  rainChance: number;
}
const CurrentWeather = ({city, temp, rainChance}: CurrentWeatherProps) => {
  
  return (
    <section className="flex flex-row justify-between items-center px-10 py-5 rounded-[10px] text-ui-text-secondary">
        <div>
          <div className="text-5xl">
            <h2 className="font-bold text-3xl">{city.charAt(0).toUpperCase() + city.slice(1)}</h2>
          </div>
          <p className="text-ui-text-primary text-[12px]">Chance of rain: {rainChance}%</p>
          <p className="text-3xl font-bold mt-5">{Math.round(temp)}°C</p>
        </div>
        <div>
          <img src={Sun} alt="Sun Image" width="150px" />
        </div>
      </section>
  )
}

export default CurrentWeather