import React from 'react'
import './Header.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from '../../Home/Home'
import Signin from '../../Signin/Signin'
import Signup from '../../Signup/Signup'

export default function Header() {
  return (
    <div className="navbar">
      <nav className="header">
      <div>
      <Link to="/">
        LOGO 
        </Link>
        </div>
        <div>

        </div>
        <div className='btnBox'>
          <button className="signupBtn"><Link to="/signup">S'inscrire</Link></button>
          <button className="signinBtn"><Link to="/signin">Se connecter</Link></button>
        </div>
      </nav>
    </div>

  )
}
