import { getWeatherIcon } from "@/utils/constants/label_icons";
import type { DayForecastProps } from "@/utils/types";

const DayForecastCard = ({
  day,
  label,
  max,
  min,
}: DayForecastProps) => {

  const dayOfWeek = new Date(day).toLocaleDateString("en-US", { weekday: "long" });

  const currentIcon = getWeatherIcon(label);
  return (
    <section className="flex justify-between items-center my-4 text-[13px]">
      <p>{dayOfWeek === new Date().toLocaleDateString("en-US", { weekday: "long" }) ? "Today" : dayOfWeek}</p>
      <div className="flex justify-around items-center gap-3 w-[50%]">
        <img src={currentIcon} alt={label} width="30px" />
        <p className="font-bold text-ui-text-secondary">{label}</p>
      </div>
      <p>
        <span className="font-bold text-ui-text-secondary">{Math.round(max)}</span>/{Math.round(min)}
      </p>
    </section>
  );
};

export default DayForecastCard;
