import {
  Box,
  Flex,
  Link,
  Image,
  Text,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";

import Logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DropDowns from "./DropDowns";
const navlink = [
  { title: "MEDICINES", link: "" },
  { title: "LAB TESTS", link: "" },
  { title: "CONSULT DOCTORS", link: "" },
  { title: "COVID-19", link: "" },
  { title: "AYURVEDA", link: "" },
  { title: "CARE PLAN", link: "" },
];

export default function Nav() {
  return (
    <>
      <Box px={0}>
        <Flex
          px={10}
          h={8}
          alignItems={"center"}
          justifyContent={"space-between"}
          my={0}
          py={7}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            <Box>
              <Image src={Logo} w={"100px"} />
            </Box>
            <HStack spacing={5}>
              {navlink.map((item, id) => {
                return (
                  <Link
                    key={id}
                    to={item.link}
                    style={{
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                    _hover={{ color: "#fe6f60" }}>
                    {item.title}
                  </Link>
                );
              })}
            </HStack>
          </Flex>
          <Flex
            fontSize={"16px"}
            gap={5}
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Box>
              <Link>Login |</Link>
              <Link> Sign Up</Link>
            </Box>
            <Flex gap={10}>
              <Link>Offers</Link>
              <Link fontSize={"16px"}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </Flex>
            <Flex ml={5}>
              <Link>Need Help?</Link>
            </Flex>
          </Flex>
        </Flex>
        <Divider py={0} />
        <Box py={1}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            py={0}
            px={10}>
            <Flex
              w={"55%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={10}>
              <input
                type="text"
                style={{
                  border: "1px solid",
                  fontSize: "14px",
                  padding: "6px 30px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#f1f5f7",
                }}
              />
              <input
                type="text"
                placeholder="Search for Medicines and Health Products"
                style={{
                  border: "1px solid",
                  width: "100%",
                  fontSize: "14px",
                  padding: "6px 10px",
                  border: "none",
                  outline: "none",
                  backgroundColor: "#f1f5f7",
                }}
              />
            </Flex>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={4}>
              <Text fontSize={"14px"}>
                {" "}
                QUICK BUY! Get 15% off on medicines*
              </Text>
              <Button
                h={9}
                px={6}
                fontSize={"14px"}
                bg={"#fe6f60"}
                color="#fff">
                Quick Order
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Divider />
        <DropDowns />
      </Box>
    </>
  );
}

// #fe6f60
