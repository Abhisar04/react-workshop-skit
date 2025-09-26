import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Typography, List, ListItem } from '@mui/material';

const StopWatch = () => {
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
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const lap = () => {
    if (isRunning) {
      setLaps(prev => [...prev, time]);
    }
  };

  return (
    
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',  // center horizontally
        paddingTop: 4,
        bgcolor: '#f0f0f0',
        minHeight: '100vh',
      }}
    >
       
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          padding: 4,
          minWidth: 300,
          textAlign: 'center',
        }}
      ><h2> &#x23F1; Stopwtch</h2><br></br>
        <Typography variant="h3" gutterBottom>
          {formatTime(time)}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2, flexWrap: 'wrap' }}>
           
          <Button variant="contained" onClick={start} disabled={isRunning}>
            Start
          </Button>
          <Button variant="contained" onClick={stop} disabled={!isRunning} color="error">
            Stop
          </Button>
          <Button variant="outlined" onClick={reset} color="secondary">
            Reset
          </Button>
          <Button variant="outlined" onClick={lap} disabled={!isRunning}>
            Lap
          </Button>
        </Box>

        <List sx={{ maxHeight: 150, overflowY: 'auto', textAlign: 'left' }}>
          {laps.map((lapTime, index) => (
            <ListItem key={index} disablePadding>
              <Typography variant="body1">
                Lap {index + 1}: {formatTime(lapTime)}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default StopWatch;
