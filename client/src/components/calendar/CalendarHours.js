import React from 'react'
import "./Calendar.css"

export default function CalendarHours({ hour, free }) {
  return (
  <div className={ free === true ? "singleHour" : "singleHourComplete"}>
  {hour} h
  </div>
)
}
