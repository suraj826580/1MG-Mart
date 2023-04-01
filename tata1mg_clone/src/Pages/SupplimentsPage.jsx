import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation, useNavigate } from "react-router-dom";
import {Box,Flex, Spinner,SimpleGrid } from "@chakra-ui/react"
import {SkinCare, Supplements} from "../redux/Products/action"
import { useSearchParams } from "react-router-dom";
import { ProductCart } from "./ProductCard";

export const SupplementsPage = () => {

  const dispatch=useDispatch()
  const store=useSelector(store=>store.ProductsReducer)
  console.log(store)
  console.log(store.isLoading)
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
    dispatch(Supplements(order&&paramsobj))
   },[order])
   return(
    <Box>
    {store.isLoading?(
    <Flex
    width="100%"
    thickness="4px"
    color="blue.500"
    justifyContent="center"
    alignItems="center"
  >
    <Spinner size="xl" />
  </Flex>
    ):(
    <Flex mt={"10"}>
      
      <Box width={"25%"} ml={"7"}>
     
      <h3>Sort By Discount</h3>
      <div>
        <input data-testid="sort-asc"
         type="radio"
         name="sort" 
         value={"asc"}
         checked={order=="asc"}
         onClick={handleBtn}/>
        <label>Ascending</label>
        <br />
        <br />
        <input
          data-testid="sort-desc"
          type="radio"
          name="sort"
          checked={order=="desc"}
          value={"desc"}
          onClick={handleBtn}
        />
        <label>Descending</label>
      </div>
    
      </Box>

      <SimpleGrid
columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
spacing={7}
paddingY="20px"
mr={"10"}
>
{store.Supplements?.map((product) => (
  <ProductCart key={product.id} {...product} />
))}
</SimpleGrid>
      
     
    </Flex>
    )}
    </Box>
  );
   
};


