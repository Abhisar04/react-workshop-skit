import React, { useState, useRef, useEffect } from 'react';

function Stopw() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => setTime(prev => prev + 10), 10);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setIsRunning(false);
  };

  const lap = () => {
    if (isRunning) {
      setLaps(prev => [...prev, time]);
    }
  };

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>{formatTime(time)}</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
          <button onClick={start} disabled={isRunning}>Start</button>
          <button onClick={stop} disabled={!isRunning}>Stop</button>
          <button onClick={reset}>Reset</button>
          <button onClick={lap} disabled={!isRunning}>Lap</button>
        </div>

        <ul>
          {laps.map((lapTime, index) => (
            <li key={index}>Lap {index + 1}: {formatTime(lapTime)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stopw;
