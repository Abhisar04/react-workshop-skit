import React, { useState } from 'react';

const API_KEY = '888496ee7ee6dfb2e5e03eea8fe2bc2d'; // <-- Replace with your API key

const Wheather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      setWeather(null);
      return;
    }
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError('');
      } else {
        setError(data.message || 'City not found.');
      }
    } catch (err) {
      setError('Failed to fetch weather. Try again.');
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  // Simple background color based on main weather condition
  const getBackground = () => {
    if (!weather) return '#f0f0f0';
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes('cloud')) return '#a0a0a0';
    if (main.includes('rain')) return '#4a90e2';
    if (main.includes('clear')) return '#f7d358';
    if (main.includes('snow')) return '#e0f7fa';
    if (main.includes('thunderstorm')) return '#616161';
    return '#f0f0f0';
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '40px auto',
        padding: 20,
        borderRadius: 10,
        backgroundColor: getBackground(),
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h2>🌤 Weather App</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{
            padding: 10,
            width: '80%',
            fontSize: 16,
            borderRadius: 5,
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={fetchWeather}
          style={{
            padding: '10px 15px',
            marginLeft: 10,
            fontSize: 16,
            borderRadius: 5,
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: 20 }}>
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p style={{ fontSize: '2rem', margin: '10px 0' }}>
            {Math.round(weather.main.temp)}°C
          </p>
          <p style={{ fontSize: '1.2rem' }}>{weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default Wheather;
