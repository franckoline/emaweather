// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// 

import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    setError("");
    setLoading(true);
    setWeather(null);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/weather?city=${city}`);
      setWeather(response.data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-sky-700 mb-6">🌤️ Weather Finder</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-grow p-2 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            onClick={fetchWeather}
            className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition"
          >
            Search
          </button>
        </div>

        {loading && (
          <div className="text-center text-sky-600 mt-4 font-medium">Loading...</div>
        )}

        {error && (
          <div className="text-center text-red-500 mt-4">{error}</div>
        )}

        {weather && (
          <div className="mt-6 p-4 bg-sky-100 rounded-xl text-sky-800 shadow-inner">
            <h2 className="text-xl font-semibold mb-2">
              {weather.name}, {weather.sys?.country}
            </h2>
            <p className="text-5xl font-bold">
              {Math.round(weather.main?.temp)}°C
            </p>
            <p className="capitalize text-lg">
              {weather.weather?.[0]?.description}
            </p>
            <div className="mt-4 grid grid-cols-3 text-center gap-2">
              <div>
                <p className="font-semibold">💨 {weather.wind?.speed} m/s</p>
                <p className="text-sm">Wind</p>
              </div>
              <div>
                <p className="font-semibold">💧 {weather.main?.humidity}%</p>
                <p className="text-sm">Humidity</p>
              </div>
              <div>
                <p className="font-semibold">🌡️ {weather.main?.feels_like}°C</p>
                <p className="text-sm">Feels like</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="mt-8 text-sm text-gray-500">Powered by Samuel Gregory</p>
    </div>
  );
}

export default App;
