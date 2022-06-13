import React, { useState } from 'react'
import './Calendar.css'
import CalendarHours from './CalendarHours'

export default function CalendarPopup(props) {
  const day = props.currentDay
  const months = props.months
  const weekdays = props.weekdays
  const setPopup = props.setPopup
  const [hours, setHours] = useState([
    { hour: 9, free: true },
    { hour: 10, free: false },
    { hour: 11, free: true },
    { hour: 12, free: true },
    { hour: 13, free: false },
    { hour: 14, free: true },
    { hour: 15, free: false },
    { hour: 16, free: true },
  ])
  const [selectedHour, setSelectedHour] = useState([])

  const handleSelect = (h) => {
    if (h.free === true) setSelectedHour(h)
    else alert("Ce créneau n'est pas disponible. Veuillez en choisir un autre.")
  }

  return (
    <div className='"popupContainer'>
      <div>
        <h3 className="popupText">
          {' '}
          Découvrez les disponibilités et réservez dès maintenant !
        </h3>
        <div className="popupTitle">
          <p className="popupDate">
            {' '}
            {weekdays[day.getDay()]} {day.getDate()} {months[day.getMonth()]}{' '}
            {day.getFullYear()}{' '}
          </p>
          <div className="popupClose" onClick={() => setPopup(false)}>
            <p style={{ color: '#FFF' }}>X</p>
          </div>
        </div>
        <div className="popupHours">
          {hours.map((h, idx) => {
            return (
              <div
                key={idx}
                className={h === selectedHour ? 'hourLineSelected' : 'hourLine'}
                onClick={() => handleSelect(h)}
              >
                <CalendarHours hour={h.hour} free={h.free} />
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <div className="popupResume">
          {selectedHour.length !== 0 && (
            <h5>
              Vous avez sélectionné le créneau de {selectedHour.hour} heures du{' '}
              {weekdays[day.getDay()]} {day.getDate()} {months[day.getMonth()]}{' '}
              {day.getFullYear()}{' '}
            </h5>
          )}
        </div>
      </div>
    </div>
  )
}
