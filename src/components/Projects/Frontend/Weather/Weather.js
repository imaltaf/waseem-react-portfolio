import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './weatheer.css'
// import weatherImage from '../assets/Weather.gif'; // Import your weather GIF image
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import weatherImage from './Weather.gif'

const Weather = () => {
  const [city, setCity] = useState('Mumbai'); // Default city: Mumbai
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'ff8c55a42390f8fd97eed082604b686a'; // Replace with your actual API key

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${apiKey}&units=metric`
      );

      setWeatherData(response.data);
      setLoading(false);
    } catch (err) {
      setError('City not found. Please enter a valid city name.');
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch weather data when the component mounts
    fetchWeatherData();
  }, [city]);

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeatherData();
    }
  };

  return (
    <Container fluid className="weather-container">
      <h2>Weather App</h2>
      <Row>
        <Col md={6}>
          <div className="search-bar">
            <Form.Group controlId="citySelect">
              <Form.Control
                as="select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="Mumbai">Mumbai</option>
  <option value="Delhi">Delhi</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Kolkata">Kolkata</option>
  <option value="Chennai">Chennai</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Pune">Pune</option>
  <option value="Jaipur">Jaipur</option>
  <option value="Lucknow">Lucknow</option>
  <option value="Ahmedabad">Ahmedabad</option>
  <option value="Bhubaneswar">Bhubaneswar</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Coimbatore">Coimbatore</option>
  <option value="Indore">Indore</option>
  <option value="Kochi">Kochi</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Patna">Patna</option>
  <option value="Surat">Surat</option>
  <option value="Vadodara">Vadodara</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
          </div>
          {loading && <p>Loading weather data...</p>}
          {error && <p className="error">{error}</p>}
        </Col>
        <Col md={6}>
          {weatherData && (
            <Card className="weather-card">
              <Row>
                <Col md={6} className="weather-image">
                  <img src={weatherImage} alt="Weather Illustration" />
                </Col>
                <Col md={6} className="weather-details">
                  <h3>
                    {weatherData.name}, {weatherData.sys.country}
                  </h3>
                  <p>Temperature: {weatherData.main.temp}°C</p>
                  <p>Conditions: {weatherData.weather[0].description}</p>
                </Col>
              </Row>
              <Row>
                <Col className="weather-footer">
                  <h4>This app was created by Waseem Akram</h4>
                  <p>Enjoy checking the weather!</p>
                </Col>
              </Row>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Weather;
