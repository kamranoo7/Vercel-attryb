import { Button, Input, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import style from "../Style/Car.module.css"
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    let [email,setEmail]=useState("")
    let [pass,setPass]=useState("")
    let [name,setName]=useState("")
    let [gender,setGender]=useState("")
   let toast=useToast()
   let navigate=useNavigate()
let handleSubmit=()=>{
    let payload={
        email,
        pass,
       name,
       gender
    }
    fetch("https://backend-done.onrender.com/users/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>{console.log(res.msg)
       if(res.msg==="user already exist"){
        toast({
            title: `User Already Exist Please Login.`,
            position: 'top',
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
       }else{
        toast({
            title: `Signup Successfull`,
            position: 'top',
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
       }
       navigate("/login")
    }
    )
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <div className={style.signup }>
      <h1 style={{color:'white',textAlign:"center",marginTop:"-20px",fontSize:"24px"}}>Signup Page</h1>
        <img src="https://img.freepik.com/free-photo/shiny-sports-car-races-through-cityscape-generated-by-ai_188544-19617.jpg?size=626&ext=jpg&ga=GA1.2.1471047703.1685425578&semt=sph" alt="" />
        <label style={{color:"white"}} htmlFor="">Name</label>
    <Input required={true} style={{color:"white"}}  type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
    <br />
    <label style={{color:"white"}}  htmlFor="">Gender</label>
    <Input style={{color:"white"}}  type="text" placeholder="Enter name" value={gender} onChange={(e)=>setGender(e.target.value)}/>
    <br />
      <label style={{color:"white"}}  htmlFor="">Email</label>
      <Input style={{color:"white"}}  type='text' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <label style={{color:"white"}}  htmlFor="">Password</label>
      <Input style={{color:"white"}}  type='password' placeholder='Enter Password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
    
      
    <br />
    <br />
    <Button onClick={handleSubmit}>SignUp</Button>
    </div>
  )
}

export default Signup
