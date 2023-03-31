import React, { useEffect } from "react";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const CartTotal = () => {
  const cartList = useSelector((store) => store.CartReducer.cart);
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const handlePrice = () => {
    const Price = cartList.reduce(
      (accumulator, currentItem) =>
        accumulator + currentItem.actual_price * Number(currentItem.quantity),
      0
    );
    const Discount = cartList.reduce(
      (accumulator, currentItem) =>
        accumulator +
        (currentItem.actual_price - currentItem.price) *
          Number(currentItem.quantity),
      0
    );
    setPrice(Price);
    setDiscount(Discount);
  };
  useEffect(() => {
    handlePrice();
  }, [cartList]);

  return (
    <Box>
      <Flex justifyContent="space-between">
        <Text as="b" fontSize="md">
          ({cartList.length}) Total Items (MRP):
        </Text>
        <Text as="b" fontSize="md">
          ₹ {price}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontSize="md">Price Discount:</Text>
        <Text fontSize="md" color="#c7202c">
          ₹ {discount}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginTop="10px">
        <Text as="b" fontSize="md">
          To Be Paid
        </Text>
        <Text as="b" fontSize="md">
          ₹ {price - discount}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginTop="10px">
        <Text as="b" fontSize="xl">
          Total Saving
        </Text>
        <Text as="b" fontSize="xl" color={"green"}>
          ₹ {discount}
        </Text>
      </Flex>
      <Link to="/userDetails">
        <Center py={3}>
          <Button>Payment</Button>
        </Center>
      </Link>
    </Box>
  );
};
