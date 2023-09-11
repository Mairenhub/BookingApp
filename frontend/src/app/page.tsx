'use client'
import MyCalendar from "@/components/myCalendar"
import { useEffect, useState } from "react"
import { myEvent } from "@/utils/Calendar.models"

const Home: React.FC = () => {
  const [events, setEvents] = useState<myEvent[]>([])

  useEffect(() => {
    console.log(events)
  }, []);

  return (
    <main>
      <div className="calendar_container">
        <MyCalendar events={events}/>
      </div>
    </main>
  )
}

export default Home