import { Image } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://quaint-fawn-dungarees.cyclic.app/lending_Page")
        .then((res)=>setData(res.data))
    },[])
   // const cart=useSelector(store=>store.Cart)
  return (
    <Box>
        {data.map((el)=>{(
            <Flex>
            <Box>
             <Image src={el.image}/>
            </Box>
            <Box>
                <Box>
                    {el.title}
                </Box>
            </Box>
            </Flex>
        )})}
        <Box>
            <Box>Total Price</Box>
            <Box>Discount</Box>
            <Box>To be paid</Box>
            <Box>Total Saving</Box>
            <Box>Checkout</Box>
        </Box>
    </Box>
  )
}
