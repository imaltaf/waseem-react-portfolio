import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual calendarific API key
    const apiKey = 'https://calendarific.com/api/v2/holidays?&api_key=baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs&country=IN&year=2019';
    const year = date.getFullYear();
    const countryCode = 'IN'; // Replace with your desired country code

    // Fetch live holiday data from the calendarific API
    fetch(`'https://calendarific.com/api/v2/holidays?&api_key=baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs&country=IN&year=2019'`)
      .then((response) => response.json())
      .then((data) => {
        // Extract the holiday dates from the API response
        const holidayDates = data.response.holidays.map((holiday) => new Date(holiday.date.iso));
        setHolidays(holidayDates);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching holiday data:', error);
        setLoading(false);
      });
  }, [date]);

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday (0) or Saturday (6)
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      if (holidays.some((holiday) => date.toDateString() === holiday.toDateString())) {
        return <span className="holiday">Holiday</span>;
      }
      if (isWeekend(date)) {
        return <span className="weekend">Weekend</span>;
      }
    }
    return null;
  };

  return (
    <div>
      <h1>Live Calendar with Holiday Data</h1>
      {loading ? (
        <p>Loading holiday data...</p>
      ) : (
        <Calendar
          value={date}
          onChange={setDate}
          tileContent={tileContent}
          calendarType="US"
        />
      )}
    </div>
  );
};

export default CalendarComponent;
