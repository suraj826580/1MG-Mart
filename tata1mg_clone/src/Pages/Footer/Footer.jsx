import { Box } from "@chakra-ui/react";
import React from "react";
import BottomFooter from "./BottomFooter";
import UpperTheoryFooter from "./UpperTheoryFooter";

export default function Footer() {
  return (
    <Box pt={10} bg={"#f7f6f7"}>
      <UpperTheoryFooter />
      <BottomFooter />
    </Box>
  );
}
