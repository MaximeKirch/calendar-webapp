import React from 'react'
import './Profile.css'
import { FakeUser } from '../../data/UserDoe'
import ProfileInfos from './ProfileInfos'
import ProfileAbout from './ProfileAbout'
import ProfileFutureVisits from './ProfileFutureVisits'
import ProfilePastVisits from './ProfilePastVisits'
export default function Profile() {
  return (
    <div className="profile">
        <div className="profileContainer">
        <div className="profileHeader">
            <img className="profilePicture" src={FakeUser[0].pic} alt='profile' />
            <h2> Bonjour, {FakeUser[0].firstname}</h2>
        </div>

        <div className="profileBody">
            <div className="profileDetails">
            <ProfileInfos FakeUser={FakeUser[0]}/>
            <ProfileAbout FakeUser={FakeUser[0]} />
            </div>

            <div className="profileVisits">
                <ProfileFutureVisits FutureVisits={FakeUser[0].futureVisits} />
                <ProfilePastVisits PastVisits={FakeUser[0].pastVisits}/>
            </div>
        </div>
        </div>
    </div>
  )
}
