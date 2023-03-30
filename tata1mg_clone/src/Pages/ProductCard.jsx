import { Box,Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCart = ({image,name,amount,price,id}) => {
  return (
    <div className={"student-card"}>
      <Image  src={image} alt="" style={{width:"200px"}}/>
      <Box >{name}</Box>
      <Box >{amount}</Box>
      <Box >{price}</Box>
     <button ><Link to={`/vitamins/:${id}`}> View Details</Link></button>
      {/* Show student details here with a button to view details */}
    </div>
  );
};

