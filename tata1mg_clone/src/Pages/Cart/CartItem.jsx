import React from "react";
import { Box, Text, Flex, Image, Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import { removeFromCart, updateCart, updateCartItemQuantity } from "../../redux/CartReducer/action";
import { useDispatch } from "react-redux";

const CartItem = ({ id,image,price,quantity,rating,name,total_purchase,actual_price,discount}) => {
  const dispatch=useDispatch()
  const handleUpdateQuantity = (e) => {
    const {value}=e.target
    const obj={id,value}
    dispatch(updateCartItemQuantity(obj))
    console.log(quantity)
  };

  const handleRemoveItem = () => {
  dispatch(removeFromCart(id))
  };

  return (
    <Flex
      border="1px solid #dadcdf"
      padding="20px"
      justifyContent="space-between"
      marginBottom="10px"
    >
      <Box width="30%">
        <Image src={image} alt={name} height={"200px"} />
      </Box>
      <Box width="67%" flexGrow="grow">
        <Text fontSize="lg">{name}</Text>

        <Text fontSize="lg"  color="#c7202c" marginTop="20px">
          Sale {(total_purchase)}
        </Text>
        <Flex>
        <Text fontSize="lg"  mt="20px" mr="5">
          Actual Price
        </Text>
        <Text textDecoration="line-through" fontSize="lg"  mt="20px" mr="5">
          {(actual_price*Number(quantity))}
        </Text>
        
        <Text fontSize="lg"  marginTop="20px">
          Discount {(discount)}
        </Text>
        </Flex>
        <Text fontSize="lg" marginTop="20px">
          Price {(price*Number(quantity))}
        </Text>
        <Flex marginTop="30px">
          <Select
            size="sm"
            maxW="80px"
            borderRadius="3px"
            marginRight="20px"
            value={quantity}
            onChange={handleUpdateQuantity}
          >
            <option value="1">Qty 1</option>
            <option value="2">Qty 2</option>
            <option value="3">Qty 3</option>
            <option value="4">Qty 4</option>
            <option value="5">Qty 5</option>
            <option value="6">Qty 6</option>
            <option value="7">Qty 7</option>
            <option value="8">Qty 8</option>
            <option value="9">Qty 9</option>
            <option value="10">Qty 10</option>
          </Select>
          <Button
            bg="#2f3337"
            color="white"
            _hover={{ bg: "black" }}
            _active={{ bg: "black" }}
            size="sm"
            borderRadius="3px"
           onClick={handleRemoveItem}
          >
            Remove
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CartItem;
