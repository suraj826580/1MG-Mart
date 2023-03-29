
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Box, Image, Flex } from '@chakra-ui/react'
export const Cart = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://quaint-fawn-dungarees.cyclic.app/lending_Page")
        .then((res)=>setData(res.data.medicine_Offers))
    },[])
    console.log(data.image)
   // const cart=useSelector(store=>store.Cart)
  return (
    
    <Flex >
    <Box border="1px solid red" width="60%">
        {data?.map((el)=>{
            return <Flex >
         <Box>
             <Image width={"100px"} src={el.image}/>
            </Box>
            <Box>
                <Box>
                    {el.title}
                </Box>
            </Box>
            </Flex>
           
})}
         </Box>
        <Box ml="30">
            <Box>Total Price</Box>
            <Box>Discount</Box>
            <Box>To be paid</Box>
            <Box>Total Saving</Box>
            <Box>Checkout</Box>
        </Box>
    </Flex>
   
  )
}
