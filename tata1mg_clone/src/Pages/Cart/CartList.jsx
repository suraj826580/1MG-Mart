import React from "react";
import { GridItem ,Flex,Box} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { CartTotal } from "./CartTotal";

const CartList = () => {

  const cartList = useSelector(store => store.CartReducer.cart)

  return (
    <GridItem colSpan={[2, 2, 2, 3, 3, 3]}>
      {cartList?.map((el) => (
          <CartItem
            key={el.id}
            {...el}
          />
        ))}
    </GridItem>
  );
};

export default CartList;
