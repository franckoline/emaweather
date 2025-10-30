export default function About() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white p-8 text-center">
      <h1 className="text-3xl font-bold text-sky-700 mb-4">About WeatherApp</h1>
      <p className="max-w-2xl text-gray-700">
        WeatherApp is a simple, open-source project built with React, FastAPI, and Tailwind CSS.  
        It helps users check current weather conditions for any city in real-time using live data from the OpenWeather API.
      </p>
    </div>
  );
}
