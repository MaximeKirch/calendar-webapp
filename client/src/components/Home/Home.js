import React from 'react'
import './Home.css'
import WorkerList from '../workerlist/WorkerList'

export default function Home() {
  return (
    <div className="Home">
    <div className="HomeContainer">
      <h2> Découvrez et rencontrez des artisans, près de chez vous.</h2>
      <div className="HomeBody">
        <WorkerList />
      </div>
    </div>
    </div>
  )
}
