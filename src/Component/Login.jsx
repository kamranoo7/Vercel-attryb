import { Button, Input, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from "../Style/Car.module.css"
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    let [email,setEmail]=useState("")
    let [pass,setPass]=useState("")
   let navigate=useNavigate()
   let toast=useToast()
   
let handleLogin=()=>{
    let payload={
        email,
        pass,
        
    }
    fetch("https://backend-done.onrender.com/users/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then((res)=>{console.log(res)
        localStorage.setItem("token",res.token)
        localStorage.setItem("email",email)
        toast({
            title: 'Login Successfull.',
            position: 'top',
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
          navigate("/car")
    }
    )
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <div className={style.login}>
        <h1 style={{textAlign:"center",marginTop:"-20px",paddingBottom:"10px",color:"White",fontWeight:"500"}}>Login Page</h1>
        <img style={{height:"200px",width:"400px",borderRadius:"10px"}} src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.2.1471047703.1685425578&semt=sph" alt="" />
      <label style={{color:"white"}} htmlFor="">Email:- </label>
      <Input style={{width:"400px",color:"white"}} type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <br />
      <label style={{color:"white"}} htmlFor="">Password:- </label>
      <Input style={{width:"400px",color:"white"}} type='password' placeholder='Enter Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
      
    <br />
    <br />
    <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Signup
