import React, { useEffect, useState } from 'react'
import './components/Layout/Header/Header.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './components/Home/Home'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import Header from './components/Layout/Header/Header'
import WorkerProfile from './components/worker/WorkerProfile'
import NotFound from './components/NotFound'
import Footer from './components/Layout/Footer/Footer'
import Profile from './components/profile/Profile'



function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then(res => console.log('Response:', res))
  }, [])

  console.log(data)
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/signin' element={<Signin/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path=":detail" element={<WorkerProfile/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;