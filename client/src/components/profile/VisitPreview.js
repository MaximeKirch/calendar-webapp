import React from 'react'
import { Link } from 'react-router-dom'

export default function VisitPreview({visit}) {
  return (
      <Link to={`/${visit.id}`}>
    <div className="visitPreviewContainer">
    <div className="visitPreviewHeader">
        <img src={visit.pic} alt="preview" />
        <h4>{visit.name}</h4>
        <p>{visit.sector}</p>
        <p>{visit.location}</p>
    </div>
    </div>
    </Link>
  )
}
