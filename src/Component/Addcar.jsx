import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../Style/Car.module.css"
import { Button, Input, useToast } from '@chakra-ui/react'
const Addcar = () => {
    let [email,setEmail]=useState("")
    let [title,setTitle]=useState("")
    let [mileage,setMileage]=useState("")
    let [description,setDescription]=useState("")
    let [price,setPrice]=useState("")
    let [color,setColor]=useState("")
    let [image,setImage]=useState("")
    let navigate=useNavigate()
   //let token=JSON.parse(localStorage.getItem("token"))
  let toast=useToast()
  
//Add
    let handleSubmit=()=>{
        let payload={
            color,
            description,
          title,
          image,
          price,
          mileage
   
        }
        console.log(payload)
        

        
        fetch("http://localhost:8080/car/add",{
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
                title: 'Car data has been Added',
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
       <div>
        <label style={{color:"white"}} htmlFor="">Image</label>
        <br />
        <Input style={{color:"white"}} type="url" placeholder='Enter image Url' value={image} onChange={(e)=>setImage(e.target.value)} />
        <br />
        <label style={{color:"white"}} htmlFor="">Title</label>
        <br />
        <Input style={{color:"white"}} type="text" placeholder='Enter Title'  value={title}onChange={(e)=>setTitle(e.target.value)}/>
       <br />
       <label style={{color:"white"}} htmlFor="">Description</label>
        <br />
        <Input style={{color:"white"}} type="text" placeholder='Enter Description'  value={description}onChange={(e)=>setDescription(e.target.value)}/>
       <br />
        <label style={{color:"white"}} htmlFor="">Color</label>
        <br />
        <Input style={{color:"white"}} type="text" placeholder='Enter color' value={color} onChange={(e)=>setColor(e.target.value)}/>
        <br />
        <label style={{color:"white"}} htmlFor="">Price</label>
        <br />
        <Input style={{color:"white"}} type="text" placeholder='Enter price' value={price} onChange={(e)=>setPrice(e.target.value)} />
        <br />
        <label style={{color:"white"}} htmlFor="">Mileage</label>
        <br />
        <Input style={{color:"white"}} type="number" placeholder='Enter Mileage' value={mileage} onChange={(e)=>setMileage(e.target.value)} />
        <br />
        <br />
      <Button style={{backgroundColor:"white"}} onClick={handleSubmit}>Submit</Button>

</div>
    </div>
  )
}

export default Addcar
