import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getVisitorCountry() {
  try {
    const { data } = await axios.get("https://ipwho.is/");
    if (!data.success) throw new Error(data.message);

    return data.country || null;
  } catch (error: any) {
    console.error("Failed to get visitor country:", error.message);
    return null;
  }
}

export function useCurrentCountry() {
  return useQuery({
    queryKey: ["currentCountry"],
    queryFn: getVisitorCountry,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}

// const { setCountry } = useWeatherContext();
// const { data: country } = useCurrentCountry();
// setCountry(country);
// console.log(country);
