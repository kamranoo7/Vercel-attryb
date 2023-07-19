import React from 'react'
import style from "../Style/Car.module.css"
import { Button } from '@chakra-ui/react'
import {EditIcon,DeleteIcon} from "@chakra-ui/icons"
import { Edit } from './Edit'
import { useNavigate } from 'react-router-dom'
const CarCard = ({image,title,description,price,mileage,color,_id}) => {
    let navigate=useNavigate()
    let deleteData=(id)=>{
        fetch(`http://localhost:8080/car/delete/${id}`,{
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
        })
            .then(res=>res.json())
            .then(res=>{console.log(res)
                window.location.reload(false)
            }).catch(err=>console.log(err))
            
        ;
    
    }
  return (
    <div className={style.div} style={{marginLeft:"70px"}}   >
        <div  >
        
      <img style={{borderRadius:"10px"}}  src={image} alt="" />
     
      <div>
        <h1 style={{fontWeight:"500"}}>Title:-{title}</h1>
        <p style={{fontWeight:"500"}}>Description:-{description}</p>
        <h3 style={{fontWeight:"500"}}>Price:-{price}</h3>
        <h4 style={{fontWeight:"500"}}>Mileage:-{mileage}km/h</h4>
        <h5 style={{fontWeight:"500"}}>Color:-{color}</h5>
        <div style={{display:"flex",gap:"20px",marginTop:"10px",alignItems:"center"}}>
            <DeleteIcon onClick={()=>deleteData(_id)}/>
           <Edit />
          <Button style={
            {
              backgroundColor:"#a9cbc0"
            }
          } onClick={()=>{
            navigate("/enventory")
          }} >AddInventory</Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CarCard
