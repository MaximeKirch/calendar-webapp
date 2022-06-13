import React from 'react'
import './WorkerList.css'
import { FakeWorker } from '../../data/WorkerDoe'
import WorkerThumb from './WorkerThumb'
import { Link } from 'react-router-dom'

export default function WorkerList() {
  return (
    <div className="listContainer">
    {
        FakeWorker.map((worker, idx) => {
            return (
                <div key={idx}>
                <Link to={`${worker.id}`}>
                <WorkerThumb worker={worker} />
                </Link>
                </div>
            )
        })
    }
    </div>
  )
}
