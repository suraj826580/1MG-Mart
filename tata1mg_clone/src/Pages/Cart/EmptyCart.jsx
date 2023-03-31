import React from "react";
import { GridItem, Text, Flex } from "@chakra-ui/layout";

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
      </Flex>
    </GridItem>
  );
};

export default EmptyCart;
