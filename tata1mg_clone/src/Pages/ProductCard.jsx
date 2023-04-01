import { Box,Image,Flex,Button ,useToast} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../redux/CartReducer/action";
export const ProductCart = ({image,name,amount,price,id,actual_price,discount}) => {
  const toast = useToast()
  const location=useLocation()
  const dispatch=useDispatch()
  const [pageName]=location.pathname.split("/:")

  const handleAddToCart=()=>{
    const Id=id
    const obj={pageName,Id}
    console.log(pageName,Id)
    dispatch(addToCart(obj))
    toast({
        title: 'cart Update.',
        description: "your product is added",
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
  }
  return (
      <Box  mt="10" ml="5" p="5"  boxShadow= " rgba(0, 0, 0, 0.35) 0px 5px 10px">
      <Link to={`${location.pathname}/:${id}` }>
      <Image m="auto" src={image} alt="" width={"100%"} height={"200px"}/>
      <Box fontSize={"16px"} >{name.substring(0,40)}</Box>
      <Box >{amount}</Box>
      <Flex>
        <Box>MRP </Box>
      <Box textDecoration="line-through" ml={2} mr={2}> {actual_price} </Box>
      <Box color={"green.400"}> {discount}</Box>
      </Flex>
      <Box fontSize={"22px"}> ₹ {price}</Box>
    </Link>
    <Button width={"100%"} mt="5" onClick={handleAddToCart}>Add To Cart</Button>
    </Box>
  );
};

