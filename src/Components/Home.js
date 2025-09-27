import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleRedirectSt = () => {
    navigate('/Stopw');
  };

  const handleRedirectTD = () => {
    navigate('/ToDo');
  };

  const handleRedirectMSW = () => {
    navigate('/StopWatch');
  };

  const handleRedirectWA = () => {
    navigate('/Wheather'); // also fix typo here
  };

  const handleRedirectLI = () => {
    window.location.href = 'https://www.linkedin.com/in/abhisar-sharma-8086ab35a/';
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
      }}
    >
      <h1>Hi..</h1>
      <h1>I am Abhisar Sharma</h1>

      <button
        onClick={handleRedirectLI}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '40px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        LinkedIn Profile
      </button>

      <h1>Project made using React</h1>
      <h2>Stopwatch | To-Do List | MUI Stopwatch | Weather</h2>

      <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={handleRedirectSt}
          style={buttonStyle}
        >
          Stopwatch
        </button>

        <button
          onClick={handleRedirectTD}
          style={buttonStyle}
        >
          To-Do List
        </button>

        <button
          onClick={handleRedirectMSW}
          style={buttonStyle}
        >
          MUI Stopwatch
        </button>

        <button
          onClick={handleRedirectWA}
          style={buttonStyle}
        >
          Weather App
        </button>
      </div>
    </div>
  );
}

// Common button style
const buttonStyle = {
  padding: '15px 30px',
  fontSize: '18px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '40px',
  cursor: 'pointer',
  margin: '10px',
};

export default Home;
