import React, { useState } from 'react'
import './Profile.css'

export default function ProfileInfos({ FakeUser }) {
  const [toggle, setToggle] = useState(false)
  const [firstname, setFirstname] = useState(FakeUser.firstname)
  const [lastname, setLastname] = useState(FakeUser.lastname)
  const [zip, setZip] = useState(FakeUser.zip)
  const [location, setLocation] = useState(FakeUser.location)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const submitChanges = () => {
    console.log(firstname, lastname, zip.toString(), location)
  }

  return (
    <div className="profileInformations">
      <h3>Mes informations</h3>
      {toggle && (
        <>
          <div>
            <input
              className="modifyInput"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="modifyInput"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <input
              className="modifyInput"
              type="numbers"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <input
              className="modifyInput"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="modifyBtnContainer">
            <button className="modifyBtn" onClick={() => submitChanges()}>
              {' '}
              Modifier mes informations
            </button>
            <button className="cancelModifyBtn" onClick={() => handleToggle()}>
              Annuler
            </button>
          </div>
        </>
      )}
      {!toggle && (
        <>
          <h4>
            {FakeUser.firstname} {FakeUser.lastname}
          </h4>
          <h4>
            {FakeUser.zip} {FakeUser.location}
          </h4>
          <button className="modifyBtn" onClick={() => handleToggle()}>
            Modifier mes informations
          </button>
        </>
      )}
    </div>
  )
}
