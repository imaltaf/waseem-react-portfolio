import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'react-clock/dist/Clock.css';

const CalendarComponent = () => {
  const [time, setTime] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [stopwatchTime, setStopwatchTime] = useState(0);

  useEffect(() => {
    if (stopwatchRunning) {
      const interval = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [stopwatchRunning]);

  const handleCardClick = () => {
    setShowTime(!showTime);
  };

  const toggleStopwatch = () => {
    setStopwatchRunning(!stopwatchRunning);
  };

  const resetStopwatch = () => {
    setStopwatchTime(0);
    setStopwatchRunning(false);
  };

  return (
    <Card className="calendar-card" onClick={handleCardClick}>
      <Card.Body>
        <Card.Title>Stopwatch and Time Display</Card.Title>
        {showTime && (
          <>
            <Card.Subtitle className="mb-2 text-muted">Current Time:</Card.Subtitle>
            <div className="time-display">{time.toLocaleTimeString()}</div>
          </>
        )}
        <Button variant="primary" onClick={toggleStopwatch}>
          {stopwatchRunning ? 'Stop Stopwatch' : 'Start Stopwatch'}
        </Button>
        <Button variant="danger" onClick={resetStopwatch}>
          Reset Stopwatch
        </Button>
        <div className="stopwatch-display">
          <strong>Stopwatch: </strong>
          {stopwatchTime} seconds
        </div>
      </Card.Body>
    </Card>
  );
};

export default CalendarComponent;
