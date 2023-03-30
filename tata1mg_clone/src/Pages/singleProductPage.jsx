import { Box, Image,Flex, Center } from '@chakra-ui/react'
import { Radio, ChakraProvider,RadioGroup,Stack,  Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const SingleProductPage = () => {
    const location=useLocation()
  
    const [data, setData] = useState([])
    const id = useParams()
    const [pageName,Id]=location.pathname.split("/:")
    useEffect(() => {
        axios.get(`https://quaint-fawn-dungarees.cyclic.app${pageName}`)
            .then((res) => setData(res.data))
    }, [])
    console.log(data[+id],pageName,Id)
    return (
       
        <Box width="87%" margin="auto" marginTop="100px">
           <Flex>
                <Box>   
                    <Image width="90%" src={data[Id-1]?.image}/>
                </Box>
                <Box border="1px solid red" width="40%">    
                <Box fontSize="28px">{data[+Id-1]?.name}</Box>
                <Box fontSize="18px" mt="4">Tata 1mg Healthcare Solutions rivate Limited</Box>
                <Box fontWeight="bold" m="4" fontSize="16px">1475 Ratings & 457 Reviews</Box>
                <Box width="90%">
                <Flex m="15" border="1px solid grey">
                        <Box m="10" >
                        <Image width="80px"   src={data[+Id]?.image}/>
                        </Box>
                        <Box >
                        <Box ml="10" mt="5%" textAlign='left'>{data[+Id]?.title}</Box >
                        <Box mt="5" color="orange">More Details</Box >
                        </Box>
                    </Flex>
                    <Flex m="15" border="1px solid grey">
                        <Box  m="10" >
                        <Image width="80px"   src={data[+Id+1]?.image}/>
                        </Box>
                        <Box>
                        <Box ml="10" mt="5%" textAlign='left'>{data[+Id+1]?.title}</Box >
                        <Box  mt="5" color="orange">More Details</Box >
                        </Box>
                    </Flex>

                </Box>
                </Box>
<Box width="30%">
   <Box border="1px solid grey" ml="10" height="60%">
                <ChakraProvider >
     
      <RadioGroup defaultValue='1'>
  <Stack spacing={5} m="5" >
    <Radio colorScheme='red' value='1'>
     {data[+Id]?.price}
    </Radio>
    <Radio colorScheme='red' value='2'>
    <Box mr="5">{data[+Id]?.price} + free shipping and 3% Extra NeuCoins </Box>
      </Radio>
      <Box>inclusive of all tax</Box>
  </Stack>
<Box m="5">
 <select style={{textAlign:"center"}}>
    <option  value="">Select quantity</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
 </select>
 </Box>
 <Box mt="5" ml="10" mb="10" backgroundColor="orange" width="80%">Add To Cart</Box>
 </RadioGroup>
</ChakraProvider>
</Box>
<Box border="2px dotted black" m="10" p="20">
Paytm Wallet: Pay with Paytm Wallet on Tata 1mg for ₹799 or more and get up to ₹400 cashback with minimum cashback of ₹20. Offer ends 31st March 2023.
</Box>
</Box>

            </Flex>

        </Box>
    )
}
