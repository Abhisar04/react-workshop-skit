import React, { useEffect, useState } from 'react';   // added useState
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Stopwatch from './Components/Stopwatch';
import Stopw from './Components/Stopw';
import ToDo from './Components/ToDo';
import Wheather from './Components/Wheather';

const RedirectScreen = () => {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5);  // countdown state

  useEffect(() => {
    if (secondsLeft === 0) {
      navigate('/Home');
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, navigate]);

  return (
    <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
      Redirecting to Home Page in {secondsLeft} second{secondsLeft !== 1 ? 's' : ''}...
    </h1>
  );
}
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<RedirectScreen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Stopw" element={<Stopw />} />
        <Route path="/Stopwatch" element={<Stopwatch />} />
        <Route path="/ToDo" element={<ToDo />} />
        <Route path="/Wheather" element={<Wheather />} />  
      </Routes>
    </Router>
  </div>
  );
}

export default App;
