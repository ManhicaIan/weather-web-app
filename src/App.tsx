import SevenDaysForecast from "./components/Forecast/SevenDaysForecast";
import MainContent from "./components/main/MainContent";
import Navbar from "./components/main/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const App = () => {
  return (
    <div className="flex h-screen gap-5 p-4 bg-ui-primary">
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <MainContent />
        <SevenDaysForecast />
      </QueryClientProvider>
    </div>
  );
};

export default App;
