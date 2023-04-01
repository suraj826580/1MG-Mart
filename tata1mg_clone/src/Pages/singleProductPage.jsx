import { Box, Image,Flex, Center } from '@chakra-ui/react'

import { Radio, ChakraProvider,RadioGroup,Stack,Text,Spinner,useToast,Button} from '@chakra-ui/react'
    import {addToCart} from "../redux/CartReducer/action"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams,Link } from 'react-router-dom'
import GenericCarousel from "./GenericCarousel";

export const SingleProductPage = () => {
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  
      return () => {
        clearTimeout(timer);
      };
    }, []);

    const location=useLocation()
    const dispatch=useDispatch()
  
    const [data, setData] = useState([])
    const id = useParams()
    const [pageName,Id]=location.pathname.split("/:")
    console.log(pageName,"d",Id)
    useEffect(() => {
        axios.get(`https://quaint-fawn-dungarees.cyclic.app/${pageName}/${Id}`)
            .then((res) =>setData(res.data))
    }, [])

    const handleCart=()=>{
        const obj={pageName,Id}
        dispatch(addToCart(obj))
        toast({
            title: 'cart Update.',
            description: "your product is added",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
    }
    return(
        <Box>
            {isLoading?(
        <Flex
        width="100%"
        thickness="4px"
        color="blue.500"
        justifyContent="center"
        alignItems="center"
      >
        <Spinner size="xl" />
      </Flex>)
        :(
       
        <Box width="90%" margin="auto" marginTop="100px" >
           <Flex mb="20">
                <Box>   
                    <Image width="100%"height={"400px"} ml="10"  src={data?.image}/>
                </Box>
                <Box border="1px solid grey" ml="20" width="40%" p="5">    
                <Box fontSize="24px">{data?.name}</Box>
                <Box fontSize="18px" mt="4" mb="4">Tata 1mg Healthcare Solutions rivate Limited</Box>
                <Text mb="4" fontSize="18px">Rating : {data?.rating}</Text>
                <Text mb="4" fontSize="18px">Total Purchase : {data?.total_purchase}</Text>
                <Box width="90%">
                    <Text fontSize={"20px"} mb="4" color={"green.500"}>{data?.discount}</Text>
                    <Flex mb="4">
                        <Text >Actual Price</Text>
                        <Text textDecoration={"line-through"} color={"green.500"} ml="2">{data?.actual_price}</Text>
                    </Flex>
                    <Text fontSize={"24"} color={"green.500"}>Price : {data?.price}</Text>
                   

                </Box>
                </Box>
<Box width="30%">
   <Box border="1px solid grey" ml="10" >
                <ChakraProvider >
     
      <RadioGroup defaultValue='1'>
  <Stack spacing={5} m="5" >
    <Flex>
    <Radio colorScheme='red' value='1'>
     {data?.price}
    </Radio>
    <Text textDecoration={"line-through"} ml={"2"}>
        {data?.actual_price} 
    </Text>
    <Text ml="2" color={"green.500"}>
    {data?.discount}  
    </Text>
    </Flex>
   
    <Radio colorScheme='red' value='2'>
    <Box mr="5">{data?.price} + free shipping and 3% Extra NeuCoins </Box>
      </Radio>
      <Box>inclusive of all tax</Box>
  </Stack>

     <Box mt="5" m="auto" textAlign={"center"} p="2"  mb="10 "backgroundColor="orange" width="80%" cursor={"pointer"} onClick={handleCart}>
  Add To Cart</Box>



 </RadioGroup>
</ChakraProvider>
</Box>
<Box border="2px dotted black" ml="10" mt="10" p="2">
Paytm Wallet: Pay with Paytm Wallet on Tata 1mg for ₹799 or more and get up to ₹400 cashback with minimum cashback of ₹20. Offer ends 31st March 2023.
</Box>
</Box>

            </Flex > 
            <GenericCarousel 
        url={`https://quaint-fawn-dungarees.cyclic.app/skin_care`}
        link="skin_care"
      />
        </Box>
        )}
        
       </Box>
    )
}
