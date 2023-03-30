import { Box, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function SimpleCard({ title, image }) {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"250px"}>
      <Box
        height={"100%"}
        textAlign={"center"}
        margin={"auto"}
        padding={3}
        _hover={{
          boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5%",
          cursor: "pointer",
        }}>
        <Image src={image} pt={"15px"} pb={2} />
        <Text
          fontWeight={600}
          fontSize="14px"
          width="150px"
          display="block"
          margin={"auto"}>
          {title}
        </Text>
      </Box>
    </Flex>
  );
}
