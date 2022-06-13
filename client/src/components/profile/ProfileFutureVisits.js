import React from 'react'
import VisitPreview from './VisitPreview'

export default function ProfileFutureVisits({FutureVisits}) {
  return (
    <div className="futureVisitsContainer">

    <h3>Mes prochains rendez-vous</h3>
    {FutureVisits.map((visit, idx) => {
      return(
        <div key={idx}>
          <VisitPreview visit={visit} />
        </div>
      )
    })}
    
    </div>
  )
}
