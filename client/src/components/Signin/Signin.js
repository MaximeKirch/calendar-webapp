import React, {useState} from 'react'
import './Signin.css'

export default function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const resetErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const verifyInputs = () => {
    //resetErrors()
    if(email.length < 10 || !email.includes('@')) setEmailError('Veuillez entrer un email valide.')
    if(password.length < 8) setPasswordError('Votre mot de passe doit contenir au moins 8 caractères.')
    else console.log('Connect with', email, password)

  }

  return (
    <div className="signinContainer">
        <div className="signinFormContainer">
              <h3>Se connecter</h3>

              <form className="signinForm">
                <label>Email</label>
                <input type="mail" value={email} placeholder="Votre email" onChange={(e) => setEmail(e.target.value)} />
                <span>{emailError}</span>
                <label>Mot de passe</label>
                <input type="password" value={password} placeholder="Votre mot de passse" onChange={(e) => setPassword(e.target.value)} />
                <span>{passwordError}</span>
              </form>
                <button className="signInBtn" onClick={() => verifyInputs()}>Se connecter</button>
        </div>
    </div>
  )
}
