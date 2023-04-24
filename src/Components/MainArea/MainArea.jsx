import React from 'react'
import './MainArea.css'
import Dashboard from '../MainAreaComponents/Dashboard/Dashboard'
import Assignments from '../MainAreaComponents/Assignments/Assignments'
import Team from '../MainAreaComponents/Team/Team'
import About from '../MainAreaComponents/About/About'
import Contact from '../MainAreaComponents/Contact/Contact'
import { Routes,Route } from 'react-router-dom'
import Store from '../MainAreaComponents/Store/Store'

function MainArea() {
  return (
    <>
    <div className="mainarea">

<Routes>
<Route path='/' element={<Dashboard/>}/>
  <Route path='/assignment' element={<Assignments/>}/>
  <Route path='/team' element={<Team/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/store' element={<Store/>}/>
</Routes>

    


    </div>

    </>
  )
}

export default MainArea
