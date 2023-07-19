import { EditIcon } from "@chakra-ui/icons"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export function Edit() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let [email,setEmail]=useState("")
    let [data,setData]=useState("")
    let [title,setTitle]=useState("")
    let [mileage,setMileage]=useState("")
    let [price,setPrice]=useState("")
    let [color,setColor]=useState("")
    let [image,setImage]=useState("")
    let navigate=useNavigate()
   //let token=JSON.parse(localStorage.getItem("token"))
  let toast=useToast()
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
//Edit
    let handleSubmit=(id)=>{
        let payload={
            color,
          title,
          image,
          price,
          mileage
   
        }
        console.log(payload)
        

        
        fetch(`https://backend-done.onrender.com/car/update/${id}`,{
            method:"PATCH",
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
              navigate("/")
        })
        .catch(err=>console.log(err))
    };
    
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <EditIcon onClick={onOpen}>Open Modal</EditIcon>
       
        
     

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Input ref={initialRef} placeholder='image url' type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Color</FormLabel>
              <Input placeholder='Enter color' type="text" value={color} onChange={(e)=>setColor(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder='Enter title' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input placeholder='Enter price' type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Mileage</FormLabel>
              <Input placeholder='Enter Mileage' type="text" value={mileage} onChange={(e)=>setMileage(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
           {data.length>0&&
           data.map((el)=>{
            return <div>
               <Button colorScheme='blue' mr={3} onClick={()=>{
                handleSubmit(el._id)
               }}>
              Save
            </Button>
            </div>
           })}
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
  }