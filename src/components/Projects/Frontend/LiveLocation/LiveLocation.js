// src/IPLocation.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IPLocation = () => {
  const [ip, setIP] = useState('');
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocation = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      setLocation(response.data);
    } catch (error) {
      console.error('Error fetching location:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ip) {
      fetchLocation();
    }
  }, [ip]);

  return (
    <div className="ip-location">
      <h1>IP Location Finder</h1>
      <input
        type="text"
        placeholder="Enter an IP address"
        value={ip}
        onChange={(e) => setIP(e.target.value)}
      />
      <button onClick={fetchLocation}>Search</button>
      {loading && <p>Loading...</p>}
      {location && (
        <div>
          <h2>Location Information</h2>
          <p>IP Address: {location.ip}</p>
          <p>City: {location.city}</p>
          <p>Region: {location.region}</p>
          <p>Country: {location.country_name}</p>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default IPLocation;
