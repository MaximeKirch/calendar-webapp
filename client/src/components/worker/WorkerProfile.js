import React, { useEffect } from 'react'
import { useState } from 'react'
import Calendar from '../calendar/Calendar'
import { FakeWorker } from '../../data/WorkerDoe'
import './WorkerProfile.css'
import { useParams } from 'react-router-dom'

export default function WorkerProfile() {
    const  id  = useParams()
    const [toggle, setToggle] = useState(false)
    const worker = FakeWorker.find(x => x.id === id.detail)

    const handleToggle = () => {
        setToggle(!toggle)
    }
  return (
    <div className="workerContainer">
        <div className="workerHero">
        <img id='workerPicture' src={worker?.pic} alt="WorkerPic"/>
        <div className="workerTitle">
        <h3>{worker?.name}</h3>
        </div>
        </div>

        <div className="workerBody">
            <div className="workerInfos">
                    <h4>{worker?.sector}</h4>
                   <h4> {worker?.zip}  {worker?.location}</h4>
            </div>
            <div className="workerDesc">
                {worker?.description}
            </div>
        </div>
        
        <div className="workerCalendar">

        <button className="workerToggleBtn" onClick={() => handleToggle()}>{toggle ? "Fermer" : "Voir les disponibilités"}</button>
        { toggle && 
         <Calendar/> 
        }
        </div>
    </div>
  )
}
