import React, { useState } from 'react';
import { Tooltip, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CommonButton from '../../CommonComponents/CommonButton';

const Container = styled(Box)({
  maxWidth: '1200px',
  margin: 'auto',
  textAlign: 'center',
  padding: '20px',
});

const CalendarContainer = styled(Box)({
  '.react-calendar': {
    width: '100%',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px;'
  },
  '.react-calendar__navigation__arrow': {
    fontSize: '32px', // Adjust the font size to make buttons larger
    lineHeight: '24px', // Adjust the line height if needed
    padding: '8px', // Increase padding for larger clickable area
  },
  '.react-calendar__month-view__weekdays': {
    backgroundColor: 'gray'
  },
  '.react-calendar__tile abbr': {
    display: 'none', // Hides the default dates
  }
});

const DayBox = styled(Box)(({ theme, isHoliday, isEvent }) => ({
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: isHoliday ? 'red' : isEvent ? 'blue' : 'white',
  color: isHoliday || isEvent ? 'white' : 'black',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
  fontWeight: 'bold', // Increased font boldness
}));

const annualLeaves = {
  '01-26': 'Republic Day',
  '03-08': 'Shivaratri',
  '04-01': 'Easter',
  '05-02': 'Eid-ul-Fithr',
  '05-01': "Labor’s Day",
  '04-14': 'Vishu',
  '07-21': 'Eid – Ul - Adha',
  '08-15': 'Independence Day',
  '09-11': 'Onam-1',
  '09-12': 'Onam-2',
  '10-11': 'Pooja (Mahanavami)',
  '12-25': 'Christmas',
};

const EventsHolidaysView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [eventDate, setEventDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [events, setEvents] = useState({
    '05-20': 'Team Meeting',
    '05-25': 'Project Deadline',
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;

  const getDayKey = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const handleAddEvent = () => {
    const newEvents = { ...events, [eventDate]: eventName };
    setEvents(newEvents);
    setEventDate('');
    setEventName('');
  };

  const renderDayBox = (date) => {
    const dayKey = getDayKey(date);
    const isHoliday = annualLeaves[dayKey];
    const isEvent = events[dayKey];
    const day = date.getDate();

    return (
      <Tooltip
        key={dayKey}
        title={isHoliday ? annualLeaves[dayKey] : isEvent ? events[dayKey] : ''}
        placement="top"
        arrow
      >
        <DayBox isHoliday={!!isHoliday} isEvent={!!isEvent}>
          <Typography variant="h6">{day}</Typography>
        </DayBox>
      </Tooltip>
    );
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Company Calendar - {currentDate.toLocaleString('default', { month: 'long' })} {year}
      </Typography>
      <CalendarContainer>
        <Calendar
          value={currentDate}
          onChange={setCurrentDate}
          tileContent={({ date, view }) => {
            if (view === 'month') {
              return renderDayBox(date);
            }
            return null;
          }}
          tileClassName={({ date, view }) => {
            if (view === 'month') {
              const dayKey = getDayKey(date);
              if (annualLeaves[dayKey]) {
                return 'holiday';
              } else if (events[dayKey]) {
                return 'event';
              }
            }
            return null;
          }}
        />
      </CalendarContainer>
      {/* <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        <TextField
          label="Event Date (MM-DD)"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}                
          margin="normal"
          variant="outlined"
          style={{ marginTop: '16px' }}
        />
        <CommonButton
          variant="contained"
          color="primary"
          onClick={handleAddEvent}
          style={{ marginTop: '16px' }}
        >
          Add Event
        </CommonButton>
      </Box> */}                     
      {/* temporarily commented as adding events Can only be done by HR */}
    </Container>
  );
};

export default EventsHolidaysView;
