import { Box,Image,Flex,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCart = ({image,name,amount,price,id,actual_price,discount}) => {
  return (
      <Box  mt="10" ml="5" p="5"  boxShadow= " rgba(0, 0, 0, 0.35) 0px 5px 10px">
      <Link to={`/vitamins/:${id}` }>
      <Image m="auto" src={image} alt="" width={"100%"} height={"200px"}/>
      <Box fontSize={"16px"} >{name.substring(0,40)}</Box>
      <Box >{amount}</Box>
      <Flex>
        <Box>MRP </Box>
      <Box textDecoration="line-through" ml={2} mr={2}> {actual_price} </Box>
      <Box color={"green.400"}> {discount}</Box>
      </Flex>
      <Box fontSize={"22px"}> ₹ {price}</Box>
      <Button width={"100%"} mt="5">Add To Cart</Button>
    </Link>
    </Box>
  );
};

