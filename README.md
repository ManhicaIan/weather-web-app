# Weather App

A weather web app that lets users search for any location and view current conditions, along with the previous and next 24 hours of weather. Data is fetched from the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api).

## Features

- Search for any location using an input field
- View temperature, wind speed, chance of rain, and general conditions (sunny, cloudy, rainy, etc.)
- Refresh the weather outlook on demand
- Selected city shared across components via the Context API

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query) — data fetching and caching
- [shadcn/ui](https://ui.shadcn.com/) — UI components
- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)

## Project Structure

```
weather-web-app/
├── src/
│   ├── components/     # MainContent, SearchBar, Forecast, ...
│   ├── context/        # WeatherContext (selected city)
│   ├── data/
│   │   └── api.ts      # useWeatherData hook
│   ├── App.tsx
│   └── main.tsx
├── .env
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or higher
- A free API key from [Visual Crossing](https://www.visualcrossing.com/sign-up)

### Installation

```bash
git clone <repository-url>
cd weather-web-app
npm install
```

### Configuration

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

### Run the app

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production build

```bash
npm run build
npm run preview
```

## Environment Variables

| Variable               | Description                       |
| ---------------------- | --------------------------------- |
| `VITE_WEATHER_API_KEY` | Visual Crossing API key           |

> ⚠️ Never commit your `.env` file. Make sure it is listed in `.gitignore`.

## Roadmap

- [ ] Loading animations with Framer Motion
- [ ] Default view based on the user's current location

## License

This project is licensed under the MIT License.