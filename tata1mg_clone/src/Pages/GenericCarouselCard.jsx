import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function GenericCarouselCard({
  name,
  actual_price,
  discount,
  price,
  image,
}) {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      <Box
        textAlign={"center"}
        boxSizing={"border-box"}
        h={"400px"}
        margin={"auto"}
        padding={3}
        _hover={{
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5%",
          cursor: "pointer",
        }}>
        <Image src={image} pt={"15px"} pb={2} w={"100%"} h={"250px"} />
        <Text
          fontWeight={600}
          fontSize="13px"
          width="150px"
          display="block"
          margin={"auto"}>
          {name}
        </Text>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text stroke={"CaptionText"}>MRP : {actual_price}</Text>
          <Text>{discount}</Text>
        </Flex>
        <Text textAlign={"left"} fontWeight={600}>
          {" "}
          Price : {price}
        </Text>
      </Box>
    </Flex>
  );
}
