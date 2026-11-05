import type { Days } from "@/utils/types";
import { AIR_CONDITIONS_OPTIONS } from "../../utils/constants/label_icons";
import Title from "../main/Title";
import AirConditionsCard from "./AirConditionsCard";

const AirConditions = ({ days }: { days: Days[] }) => {
  const { windspeed, uvindex, precipprob, feelslike } = days?.[0] || { windspeed: 0, uvindex: 0, precipprob: 0, feels: 0  };
  console.log(uvindex);
  
  
  return (
    <section className="flex flex-col gap-3 px-8 py-4 bg-ui-secondary text-ui-text-primary rounded-[20px]">
      <div className="flex items-center justify-between">
        <Title>Air Conditions</Title>
        <button className="px-3 py-1 text-[11px] font-semibold bg-ui-button hover:bg-ui-button-hover text-white rounded-full cursor-pointer transition-colors">
          See more
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <AirConditionsCard label={AIR_CONDITIONS_OPTIONS[0].label} icon={AIR_CONDITIONS_OPTIONS[0].icon} value={Math.round(feelslike)} unit="ºC" />
        <AirConditionsCard label={AIR_CONDITIONS_OPTIONS[1].label} icon={AIR_CONDITIONS_OPTIONS[1].icon} value={windspeed} unit="km/h" />
        <AirConditionsCard label={AIR_CONDITIONS_OPTIONS[2].label} icon={AIR_CONDITIONS_OPTIONS[2].icon} value={precipprob} unit="%" />
        <AirConditionsCard label={AIR_CONDITIONS_OPTIONS[3].label} icon={AIR_CONDITIONS_OPTIONS[3].icon} value={uvindex} unit="" />
      </div>
    </section>
  );
};

export default AirConditions;
