import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Login from '../Component/Login'
import Signup from '../Component/Signup'
import Car from '../Component/Car'
import Addcar from '../Component/Addcar'
import Enventory from '../Component/Enventory'
import OemModel from '../Component/OemModel'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} >

        </Route>
        <Route path="/enventory" element={<Enventory/>}></Route>
        <Route path="/car" element={<Car/>}></Route>
        <Route path='/addcar' element={<Addcar/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/oem" element={<OemModel/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoute
