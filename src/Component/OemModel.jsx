import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Input } from '@chakra-ui/react'
const OemModel = () => {
   let [data,setData]=useState("")
    let model=()=>{
        fetch("https://backend-done.onrender.com/oem/",{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`,
                
             },
        }).then(res=>res.json())
        .then(res=>{console.log(res)
          setData(res) })
        .catch(err=>console.log(err))
      
    }
  return (
    <div>
        <h1 style={{textAlign:"center",fontSize:"24px",fontWeight:"500"}}>Search Model</h1>
     <Input type="text" placeholder='Enter Model' />
     <Button onClick={model}>Submit</Button>
     {data.length>0&&
     data.map((el,index)=>{
        return <div>
            <table style={{border:"1px solid black"}}>
                <tr style={{border:"1px solid black"}}>
                    <th>S.NO.</th>
                <th style={{border:"1px solid black"}}>Model_name</th>
                <th>Year</th>
                <th style={{border:"1px solid black"}}>List_Price</th>
                <th>Color</th>
                <th style={{border:"1px solid black"}}>Mileage</th>
                <th>Max-Speed</th>
                <th>Power</th>
                </tr>
                <tr style={{border:"1px solid black"}}>
                <td style={{border:"1px solid black"}}>{index+1}</td>
                <td style={{border:"1px solid black"}}>{el.model_name}</td>
                <td style={{border:"1px solid black"}}>{el.year}</td>
                <td style={{border:"1px solid black"}}>{el.list_price}</td>
                <td style={{border:"1px solid black"}}>{el.colors}</td>
                <td style={{border:"1px solid black"}}>{el.mileage}km/h</td>
                <td style={{border:"1px solid black"}}>{el.max_speed}km/s</td>
                <td style={{border:"1px solid black"}}>{el.power}</td>
                </tr>
            </table>
        </div>
     })}
    </div>
  )
}

export default OemModel
