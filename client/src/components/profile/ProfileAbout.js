import React, {useState} from 'react'

export default function ProfileAbout({FakeUser}) {
  const [toggle, setToggle] = useState(false)
  const [favourites, setFavourites] = useState(FakeUser.favourites)
  const [bio, setBio] = useState(FakeUser.bio)

  const changeToggle = () => {
    setToggle(!toggle)
  }

  const sendModification = () => {
    console.log(favourites, bio)
    changeToggle()
  }
  return (
<div className="profileAbout">
                    <h3>À propos de moi</h3>
                    <h4>Mes secteurs favoris</h4>
                    {toggle &&
                        <input className="inputModify" value={favourites} onChange={(e) => setFavourites(e.target.value)}/>
                    }
                    {!toggle &&
                    <h5>{FakeUser.favourites}</h5>
                    }
                    <h4>Description</h4>
                    {toggle && 
                    <div className="textareaModifyContainer">
                    <textarea className="textareaModify" value={bio} onChange={(e) => setBio(e.target.value)} />
                    <div className="modifyBtnContainer">
                    <button className="modifyBtn" onClick={() => sendModification()}>Modifier mes informations</button>
                    <button className="cancelModifyBtn" onClick={() => changeToggle()}>Annuler</button>
                    </div>
                    </div>
                    }
                    { !toggle &&
                    <>
                    <h5>{FakeUser.bio}</h5>
                    <button className="modifyBtn" onClick={() => changeToggle()}>Modifier mes informations</button>
                    </>
                    }
                </div>
  )
}
