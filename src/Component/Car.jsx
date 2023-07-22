import { Button, Center, Collapse } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from  "../Style/Car.module.css"
import {DeleteIcon} from "@chakra-ui/icons"
import CarCard from './CarCard'
import { Edit } from './Edit'

const Dasboard = () => {
    let [data,setData]=useState("")
    let [email,setEmail]=useState("")
    let [title,setTitle]=useState("")
    let [mileage,setMileage]=useState("")
    let [price,setPrice]=useState("")
    let [color,setColor]=useState("")
    let [image,setImage]=useState("")
    let navigate=useNavigate()
   //let token=JSON.parse(localStorage.getItem("token"))
  
  
//Add
    let handleSubmit=()=>{
        let payload={
            color,
          title,
          image,
          price,
          mileage
   
        }
        console.log(payload)
        

        
        fetch("https://backend-done.onrender.com/car/add",{
            method:"POST",
            headers:{
               "Authorization":`Bearer ${localStorage.getItem("token")}`,
               "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res=>{console.log(res)
            alert("data has been Added")
        })
        .catch(err=>console.log(err))
    };
    //GEt
useEffect(()=>{
getdata()
},[])
let getdata=()=>{
    fetch("https://backend-done.onrender.com/car/",{
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`,
        
     },
}).then(res=>res.json())
.then(res=>{console.log(res)
    setData(res)})
.catch(err=>console.log(err))
}
//Ascending
let sort1=()=>{
    fetch(`https://backend-done.onrender.com/car/ascending`,{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{setData(res)
   
   
}).catch(err=>console.log(err))


}
//Descending
let sort2=()=>{
    fetch(`https://backend-done.onrender.com/car/descending`,{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{setData(res)
   
   
}).catch(err=>console.log(err))


}
//Filtering
let filter1=()=>{
    fetch(`https://backend-done.onrender.com/car/grey`,{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
 
   setData(res)
}).catch(err=>console.log(err))

}
let filte2=()=>{
    fetch(`https://backend-done.onrender.com/car/red`,{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
   
   setData(res)
}).catch(err=>console.log(err))

}
let filter3=()=>{
    fetch('https://backend-done.onrender.com/car/black',{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
  
   setData(res)
}).catch(err=>console.log(err))

}
let filter4=()=>{
    fetch('https://backend-done.onrender.com/car/white',{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
  
   setData(res)
}).catch(err=>console.log(err))

}
//Delete
let deleteData=(id)=>{
    fetch(`https://backend-done.onrender.com/car/delete/${id}`,{
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
//Mileage-10-15Km
let Mileage1=()=>{
    fetch('https://backend-done.onrender.com/car/mileage1',{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
  
   setData(res)
}).catch(err=>console.log(err))

}
//Mileage-16-20Km
let Mileage2=()=>{
    fetch('https://backend-done.onrender.com/car/mileage2',{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
  
   setData(res)
}).catch(err=>console.log(err))

}
//Mileage-21-25Km
let Mileage3=()=>{
    fetch('https://backend-done.onrender.com/car/mileage3',{
            
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
})
.then(res=>res.json())
.then(res=>{
  
   setData(res)
}).catch(err=>console.log(err))

}
  return (
    
       
<div>
    <h1 style={{textAlign:"center",fontSize:"24px",fontWeight:"500"}}>All Car</h1>
    <div style={{marginLeft:"1000px"}}>
        <div>
            
            <Button onClick={()=>{
                localStorage.removeItem("token")
                localStorage.removeItem("email")

navigate("/login")
            }}>LOGOUT</Button>
        </div>
    </div>
    <div className={style.car}>
    <div>
        <h1 style={{fontWeight:"500"}}>Sort by Price</h1>
    <Button onClick={sort1} >SortAscending</Button>
    <br />
    <Button onClick={sort2}>SortDescending</Button>
    <br />
    <h1 style={{fontWeight:"500"}}>Sort by Color</h1>
    <input type='checkbox' onChange={filter1}/>
    <label htmlFor="">GREY</label>
    <br />
    <input type='checkbox' onChange={filte2}/>
    <label htmlFor="">RED</label>
    <br />
    <input type='checkbox' onChange={filter3}/>
    <label htmlFor="">BLACK</label>
    <br />
    <input type='checkbox' onChange={filter4}/>
    <label htmlFor="">White</label>
    <br />
    <h1 style={{fontWeight:"500"}}>Mileage</h1>
    <Button onClick={Mileage1}>10-15Km/h</Button>
    <Button onClick={Mileage2}>16-20Km/h</Button>
    <Button onClick={Mileage3}>21-25Km/h</Button>
    </div>
    
    <div className={style.carcard}  >
   {data.length>0&&
   data.map((el,index)=>{
    return <div   
>       <CarCard key={el.id} {...el}/>

    </div>
   })}
   </div>
   </div>
</div>
   
  )
}

export default Dasboard
