import React from "react";
import { GridItem, Text, Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <GridItem
      colSpan={[2, 2, 2, 3, 3, 3]}
      paddingY="40px"
      border="1px solid #dadcdf"
      textAlign="center"
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="2xl" marginBottom="10px">
          Your shopping cart is empty.
        </Text>
        <Link  to="/">
          <Text border={"1px solid green"} backgroundColor="green.500" color="white" margin={"2"} p="3" fontSize={"xl"} >
          Start Shopping
          </Text>
         
        </Link>
      </Flex>
    </GridItem>
  );
};

export default EmptyCart;
