import type { Days } from '@/utils/types'
import Title from '../main/Title'
import TodayForecastCard from './TodayForecastCard'


const TodayForecast = ({ days }: { days: Days[] }) => {

  const { hours } = days?.[0] || { hours: [] };

  const getCurrentHour = () => {
    const currentHour = new Date().getHours();
    return currentHour;
  }
  const hoursToDisplay = hours.filter(hour => hour.datetime >= `${getCurrentHour()}:00:00` && hour.datetime <= `${getCurrentHour() + 5}:00:00`);

  return (
    <section className="flex flex-col gap-4 px-8 py-4 rounded-[10px] bg-ui-secondary text-ui-text-primary">
        <Title >Today's Forecast</Title>
        <section className="flex flex-row justify-between gap-4 overflow-x-auto">
          {hoursToDisplay.map((hour, index) => {
            const { datetime, temp } = hour || { datetime: "", temp: 0 };
            return <TodayForecastCard key={index} temperature={temp} time={datetime} label={hour.conditions} />;
          })}
        </section>
      </section>
  )
}

export default TodayForecast