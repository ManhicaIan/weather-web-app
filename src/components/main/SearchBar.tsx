import { useWeatherContext } from "@/context/WeatherContext";

const SearchBar = () => {
  const { setCurrentCountry } = useWeatherContext();

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setCurrentCountry(formData.get("search") as string);
  };
  return (
    <section>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Search for cities"
          className="p-2 w-full bg-ui-secondary text-ui-text-primary placeholder:text-ui-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[5px]"
        />
      </form>
    </section>
  );
};

export default SearchBar;
