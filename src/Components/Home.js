import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleRedirectSt = () => {
    navigate('/Stopw'); // relative path
    // or navigate('https://example.com'); for external
  };

    const handleRedirectTD = () => {
  navigate('/ToDo');  // ✅ external redirect
    // or navigate('https://example.com'); for external
  };

    const handleRedirectMSW = () => {
  navigate('/StopWatch');  // ✅ external redirect
    // or navigate('https://example.com'); for external
  };

    const handleRedirectWA = () => {
  navigate('/Wheather');  // ✅ external redirect
    // or navigate('https://example.com'); for external
  };
  return (
  <div>
    <br></br>
    <h1>Apps made usng React</h1> 
     <h2>   Stopwatch | To-Do List  |  StopWatch | Wheather </h2>
    <br></br>
    <button  onClick={handleRedirectSt}   style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: '50px',
          borderRadius: '800px',
          cursor: 'pointer'
        }}>StopWatch</button>

  <button  onClick={handleRedirectTD}   style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: '50px',
          borderRadius: '80px',
          cursor: 'pointer'
        }}>To-Do List</button>

          <button  onClick={handleRedirectMSW}   style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: '50px',
          borderRadius: '80px',
          cursor: 'pointer'
        }}>MUI Stopwatch</button>

          <button  onClick={handleRedirectWA}   style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#007bff',
          color: 'white',
          border: '50px',
          borderRadius: '80px',
          cursor: 'pointer'
        }}>Wheather App</button>
  </div>
  )
}

export default Home;
