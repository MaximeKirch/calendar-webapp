import React from 'react'
import VisitPreview from './VisitPreview'

export default function ProfilePastVisits({PastVisits}) {
    console.log('PAST', PastVisits)
  return (
    <div className="pastVisitsContainer">
    <h3>Mes visites précédentes</h3>
        {PastVisits.map((visit, idx) => {
      return(
        <div key={idx}>
          <VisitPreview visit={visit} />
        </div>
      )
    })}
    </div>
  )
}
