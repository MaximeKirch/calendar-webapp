import React, { useState } from 'react'
import './Calendar.css'
import CalendarDays from './CalendarDays'
import CalendarPopup from './CalendarPopup'

export default function Calendar() {
  const [months, setMonths] = useState([
    'Janvier',
    'Fevrier',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre ',
    'Octobre',
    'Novembre',
    'Décembre',
  ])
  const [weekdays, setWeekdays] = useState([
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
  ])
  const [currentDay, setCurrentDay] = useState(new Date())
  const [popup, setPopup] = useState(true)

  const changeCurrentDay = (day) => {
      setCurrentDay(day)
  }

  const previousMonth = (currentDay) => {
      const month = currentDay.getMonth()
      currentDay.setMonth(month -1)
  }

  const nextMonth = (currentDay) => {
    const month = currentDay.getMonth()
    currentDay.setMonth(month +1)
  }

  return (
    <div className="calendar">
      <div className="calendarHeader">
        <h2>
           {months[currentDay.getMonth()]} {currentDay.getFullYear()}
        </h2>
      </div>
      
      <div className="calendarBody">
          <div className='tableHeader'>
              {
                  weekdays.map((weekday, idx) => {
                      return <div key={idx} className="weekday"><p>{weekday}</p></div>
                  } )
              }
          </div>
          <div className="table">
              <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} setPopup={setPopup} />
          </div>
      </div>

      <div className="calendarPopup">
      { popup !== false &&
          <CalendarPopup currentDay={currentDay} months={months} weekdays={weekdays} setPopup={setPopup} />
      }
      </div>
    </div>
  )
}
