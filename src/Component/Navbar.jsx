import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Style/Car.module.css"
const Navbar = () => {
  return (
    <div className={style.nav}>
       <Link to="/">
      <img style={{width:"100px",borderRadius:"20px"}} src="https://i.imgur.com/9kTU1F2.png" alt="" />
      </Link>
      <Link style={{fontSize:"20px"}} to="/addcar">AddCar</Link>
      <Link style={{fontSize:"20px"}}  to="/login">Login</Link>
      <Link style={{fontSize:"20px"}}  to="/signup" >Signup</Link>
      <Link style={{fontSize:"20px"}}  to="/car">Car</Link>
      <Link style={{fontSize:"20px"}}  to="/oem">OEM</Link>
    </div>
  )
}

export default Navbar
