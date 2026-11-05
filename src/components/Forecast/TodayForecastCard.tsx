import { getWeatherIcon } from "@/utils/constants/label_icons";
interface TodayForecastCardProps {
  temperature: number;
  time: string;
  label: string;
}
const TodayForecastCard = ( { temperature, time, label }: TodayForecastCardProps ) => {

  const currentIcon = getWeatherIcon(label);; 

  return (
    <div className="flex flex-col justify-center items-center font-bold">
        <p className="text-[12px]">{time.slice(0, 5)}</p>
        <img src={currentIcon} alt={label} width='50px' className="my-5"/>
        <p className="text-ui-text-secondary">{Math.round(temperature)}°C</p>
    </div>
  )
}

export default TodayForecastCard