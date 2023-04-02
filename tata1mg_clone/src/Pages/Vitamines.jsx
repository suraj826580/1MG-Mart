import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation, useNavigate } from "react-router-dom";
import {Box,Flex, Spinner,SimpleGrid, Text,Button } from "@chakra-ui/react"
import {VitaminsData} from "../redux/Products/action"
import { useSearchParams } from "react-router-dom";
import { ProductCart } from "./ProductCard";

export const VitaminsPage = () => {

  const dispatch=useDispatch()
  const store=useSelector(store=>store.ProductsReducer)
    const [order,setOrder]=useState("")

  const handleBtn=(e)=>{
    const {value}=e.target
    setOrder(value)
   }
   useEffect(()=>{
    const paramsobj={
      params:{
      _sort:"price",
      _order:order
      }
    }
    dispatch(VitaminsData(order&&paramsobj))
   },[order])

   return(
    <Box>
      <Box width={"25%"} ml={"7"}>
      <Text fontSize={"18"}>Sort By Price</Text>
      <Box ml="5" mt="3">
      <Button
      color="white"
      backgroundColor={"green.500"}
      marginX="px"
      value="asc"
      isDisabled={order=="asc"}
      onClick={handleBtn}
    >
      Sort By Ascending
    </Button>
    <Button
        color="white"
        backgroundColor={"green.500"}
      marginX="px"
      value="desc"
      isDisabled={order=="desc"}
      onClick={handleBtn}
    >
      Sort By Descending
    </Button>
      </Box>
      </Box>

      <SimpleGrid
columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
spacing={7}
paddingY="20px"
mr={"10"}
>
{store.Vitamins?.map((product) => (
  <ProductCart key={product.id} {...product} />
))}
</SimpleGrid>
      
{/*      
    </Flex> */}
    </Box>
  );
   
};


