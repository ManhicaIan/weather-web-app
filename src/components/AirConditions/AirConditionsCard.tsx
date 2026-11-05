import type { AirConditionsCardProps } from "../../utils/types";

const AirConditionsCard = ({
  label,
  icon: Icon,
  value,
  unit,
}: AirConditionsCardProps) => {
  return (
    <div className="text-[15px]">
      <div className="flex gap-3 items-center mb-2">
        <Icon />
        <p>{label}</p>
      </div>
      <h3 className="font-bold text-ui-text-secondary ml-7">{value} {unit}</h3>
    </div>
  );
};

export default AirConditionsCard;
