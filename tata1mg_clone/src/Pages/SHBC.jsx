import { Box, Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export default function SHBC() {
  return (
    <Box>
      <Link to="#">
        <Center>
          <Image
            p={"30px"}
            w={"85%"}
            src={
              "https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png"
            }
          />
        </Center>
      </Link>
    </Box>
  );
}
