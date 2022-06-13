import React from 'react'
import "./WorkerList.css"

export default function WorkerThumb({worker}) {
  return (
    <div className="workerThumbContainer">
        <img className="thumbImg" src={worker.pic} alt="thumb" />
        <div className="thumbDescription">
            <h3>{worker.name}</h3>
            <h4>{worker.sector}</h4> 
            <h4>{worker.location}</h4>
        </div>
    </div>
  )
}
