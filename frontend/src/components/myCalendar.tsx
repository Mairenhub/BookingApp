import React, { useState, useEffect } from "react"
import { Calendar, momentLocalizer, Event} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { myEvent } from "@/utils/Calendar.models";

const localizer = momentLocalizer(moment)

const MyCalendar: React.FC<{ events: myEvent[] }> = ({ events }) => (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
  

export default MyCalendar