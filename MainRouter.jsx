//Shane Tawse, #301319122, Date: July16, 2024
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'

import Layout from './components/Layout.jsx'
const MainRouter = () => {
    return (<div>
    <Layout/>
    <Routes>
    
   <Route  path="/" element={<Home />} />
   <Route  path="/location" element={<Location/>} />
   <Route path="/forecast" element={<Forecast />} />
   <Route  path="/breezy_team" element={<Breezy_Team />} />
   <Route  path="/contact" element={<Contact />} />
    
    </Routes>
    </div>
    )
   }
   export default MainRouter

