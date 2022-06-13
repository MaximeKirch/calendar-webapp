import React, {useState} from 'react'
import './Signup.css'

export default function Signup() {

  const [mail, setMail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [password, setPassword] = useState('')
  const [passwordValidation, setPasswordValidation] = useState('')
  const [firstnameError, setFirstnameError] = useState('')
  const [lastnameError, setLastnameError] = useState('')
  const [mailError, setMailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordValidationError, setPasswordValidationError] = useState('')

  const resetErrorInputs = () => {
    setMailError('')
    setPasswordError('')
    setPasswordValidationError('')
  }

  const verifyInputs = () => {
    resetErrorInputs()
    if(!mail.includes('@') || mail === undefined) setMailError("Veuillez entrer une adresse mail valide.")
    if(mail.length < 10) setMailError('Veuillez entrer une adresse mail valide.')
    if(password.length < 8) setPasswordError('Votre mot de passe doit contenir au moins 8 caractères.')
    if(password !== passwordValidation) setPasswordValidationError('Vos mot de passe ne sont pas identiques.')
    if(firstname.length <= 1) setFirstnameError('Votre prénom doit contenir au moins 1 caractère.')
    if(lastname.length <= 1) setLastnameError('Votre nom doit contenir au moins 1 caractère.')
    else console.log('Create new user', firstname, lastname, mail, password)

  }
  return (
    <div className='signupContainer'>

      <div className="signupFormContainer">
      <h3>Vous n'avez pas encore de compte ? Rejoignez-nous !</h3>
          <form  className="formContainer">
            <label>Nom</label>
            <input type="text" value={lastname} placeholder='Votre nom' onChange={(e) => setLastname(e.target.value)}></input>
            <span>{firstnameError}</span>
            <label>Prénom</label>
            <input type="text" value={firstname} placeholder="Votre prénom" onChange={(e) => setFirstname(e.target.value)}></input>
            <span>{lastnameError}</span>
            <label>Email </label>
            <input type="mail" value={mail} placeholder="Votre email" onChange={(e) => setMail(e.target.value)}></input>
            <span>{mailError}</span>
            <label> Mot de passe</label>
            <input type="password" value={password} placeholder="Votre mot de passe" onChange={(e) => setPassword(e.target.value)}></input>
            <span>{passwordError}</span>
            <label>Confirmez votre mot de passe</label>
            <input type="password" value={passwordValidation} placeholder="Confirmez votre mot de passe" onChange={(e) => setPasswordValidation(e.target.value)}></input>
            <span>{passwordValidationError}</span>
          </form>

          <button className="sendFormBtn" onClick={() => verifyInputs()}>S'inscrire</button>
        </div>
    </div>
  )
}
