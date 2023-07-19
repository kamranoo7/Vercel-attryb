import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../Style/Car.module.css"
import { Button, Input, useToast } from '@chakra-ui/react'
const Enventory = () => {
     let [email,setEmail]=useState("") 
    let [kms,setKms]=useState("")
    let [major_scratches,setMajor_scratches]=useState("")
    let [originalpaint,setOriginalpaint]=useState("")
    let [number_of_accident,setNumber_of_accident]=useState("")
    let [number_of_previous_buyer,setNumber_of_previous_buyer]=useState("")
    let [registration_place,setRegistration_place]=useState("")
    let navigate=useNavigate()
   //let token=JSON.parse(localStorage.getItem("token"))
  let toast=useToast()
  
//Add
    let handleSubmit=()=>{
        let payload={
           kms,
           major_scratches,
           number_of_accident,
           number_of_previous_buyer,
           registration_place,
           originalpaint
   
        }
        console.log(payload)
        

        
        fetch("https://backend-done.onrender.com/enventory/add",{
            method:"POST",
            headers:{
               "Authorization":`Bearer ${localStorage.getItem("token")}`,
               "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res=>{console.log(res)
            toast({
                title: 'Eneventory data has been Added',
                position: 'top',
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
              navigate("/car")
        })
        .catch(err=>console.log(err))
    };
    //GEt
  return (
    <div className={style.addcar}>
      <h1 style={{color:'white',textAlign:"center",marginTop:"-20px",fontSize:"24px"}}>Add Inventory</h1>
       <div>
        <label style={{color:"white"}} htmlFor="">Kms</label>
        <br />
        <Input style={{color:"white"}} type="number" placeholder='Enter kms' value={kms} onChange={(e)=>setKms(e.target.value)} />
        <br />
        <label style={{color:"white"}} htmlFor="">Major_Scratches</label>
        <br />
        <Input style={{color:"white"}} type="number" placeholder='Enter Scractches'  value={major_scratches}onChange={(e)=>setMajor_scratches(e.target.value)}/>
       <br />
       <label style={{color:"white"}} htmlFor="">Original_Paint</label>
        <br />
        <Input style={{color:"white"}} type="text" placeholder='Enter Original Paint'  value={originalpaint}onChange={(e)=>setOriginalpaint(e.target.value)}/>
       <br />
        <label style={{color:"white"}} htmlFor="">Number Of Accident</label>
        <br />
        <Input style={{color:"white"}} type="number" placeholder='Enter number of accident' value={number_of_accident} onChange={(e)=>setNumber_of_accident(e.target.value)}/>
        <br />
        <label style={{color:"white"}} htmlFor="">Number of Previous Buyers</label>
        <br />
        <Input style={{color:"white"}} type="number" placeholder='Enter number of previous buyer' value={number_of_previous_buyer} onChange={(e)=>setNumber_of_previous_buyer(e.target.value)} />
        <br />
        <label style={{color:"white"}} htmlFor="">Registration_Place</label>
        <br />
        <Input style={{color:"white"}} type="text" placeholder='Enter Registration Place' value={registration_place} onChange={(e)=>setRegistration_place(e.target.value)} />
        <br />
        <br />
      <Button style={{backgroundColor:"white"}} onClick={handleSubmit}>Submit</Button>

</div>
    </div>
  )
}

export default Enventory
