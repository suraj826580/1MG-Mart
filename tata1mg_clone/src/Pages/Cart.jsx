import React from "react";
import { useSelector } from "react-redux";
import { Container, Text, Grid, Box, Image } from "@chakra-ui/react";
import EmptyCart from "./Cart/EmptyCart";
import CartList from "./Cart/CartList";
import { CartTotal } from "./Cart/CartTotal";
export const Cart = () => {
    const cart = useSelector(store => store.CartReducer.cart)
    console.log(cart)
    return (
        <Container maxW="7xl" marginY="30px">
            <Text color="#2f3337" fontSize="2xl" marginBottom="20px">
                Shopping Cart
            </Text>
            <Grid
                templateColumns={[
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(4, 1fr)",
                    "repeat(4, 1fr)",
                    "repeat(4, 1fr)",
                ]}
                gap={4}
            >
                {cart.length === 0 ? <EmptyCart /> : <CartList />}
                <CartTotal />
            </Grid>
        </Container>
    );
};

