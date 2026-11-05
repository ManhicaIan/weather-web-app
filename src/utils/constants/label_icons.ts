import { TiWeatherCloudy } from "react-icons/ti";
import { FaCity, FaMap, FaSun, FaWind } from "react-icons/fa";
import { RiListSettingsFill } from "react-icons/ri";
import { MdDeviceThermostat } from "react-icons/md";
import { WiRaindrop } from "react-icons/wi";

import Sun from "../../assets/sun.svg";
import Cloud from "../../assets/cloud.svg";
import CloudDrizzle from "../../assets/cloud-drizzle.svg";
import CloudRain from "../../assets/cloud-rain.svg";
import CloudSnow from "../../assets/cloud-snow.svg";
import CloudSun from "../../assets/cloud-sun.svg";
import CloudFog from "../../assets/cloud-fog.svg";
import CloudLightning from "../../assets/cloud-lightning.svg";
import Moon from "../../assets/moon.svg";
import Wind from "../../assets/wind.svg";

export const NAV_OPTIONS = [
  { label: "Weather", icon: TiWeatherCloudy },
  { label: "Cities", icon: FaCity },
  { label: "Map", icon: FaMap },
  { label: "Settings", icon: RiListSettingsFill },
] as const;

export const AIR_CONDITIONS_OPTIONS = [
  { label: "Real Feel", icon: MdDeviceThermostat, unit: "º" },
  { label: "Wind", icon: FaWind, unit: "km/h" },
  { label: "Chance of Rain", icon: WiRaindrop, unit: "%" },
  { label: "UV Index", icon: FaSun, unit: "" },
] as const;

export const WEATHER_ICONS = {
  // Céu limpo
  Clear: Sun,
  "Clear day": Sun,
  "Clear night": Moon,

  "Partially cloudy": CloudSun,
  Overcast: Cloud,
  Cloudy: Cloud,

  Rain: CloudRain,
  "Rain, Overcast": CloudRain,
  "Rain, Partially cloudy": CloudDrizzle,
  "Freezing rain": CloudSnow,

  Snow: CloudSnow,
  // "Ice": Snowflake,

  Fog: CloudFog,
  Wind: Wind,
  Thunderstorm: CloudLightning,
} as const;

type WeatherCondition = keyof typeof WEATHER_ICONS;

export const getWeatherIcon = (condition: string) => {
  if (condition in WEATHER_ICONS) {
    return WEATHER_ICONS[condition as WeatherCondition];
  }
  return Cloud;
};