import {
  Box,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Button,
  Divider,
  Flex,
} from "@chakra-ui/react";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"md"} mb={2} color={"#000"}>
      {children}
    </Text>
  );
};

const LinkChild = ({ children }) => {
  return (
    <Link fontSize={"12px"} lineHeight={1.2}>
      {children}
    </Link>
  );
};

export default function BottomFooter() {
  return (
    <Box bg={"#fefdf8"} color={"#6C7278"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={6}>
          <Stack align={"flex-start"}>
            <ListHeader>Know Us</ListHeader>
            <LinkChild>About us</LinkChild>
            <LinkChild>Contact Us</LinkChild>
            <LinkChild>Press Coverage</LinkChild>
            <LinkChild>Careers</LinkChild>
            <LinkChild>Business Partnership</LinkChild>
            <LinkChild>Become a Health Partner</LinkChild>
            <LinkChild>Corporate Governance</LinkChild>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Our Policies</ListHeader>
            <LinkChild>Privacy Policy </LinkChild>
            <LinkChild>Terms and Conditions</LinkChild>
            <LinkChild>Editorial Policy</LinkChild>
            <LinkChild>Return Policy</LinkChild>
            <LinkChild>IP Policy</LinkChild>
            <LinkChild>Grievance Redressal Policy</LinkChild>
            <LinkChild>Fake Jobs and Fraud Disclaimer</LinkChild>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Our Services</ListHeader>
            <LinkChild>Order Medicines</LinkChild>
            <LinkChild>Book Lab Tests</LinkChild>
            <LinkChild>Consult a Doctor</LinkChild>
            <LinkChild>Ayurveda Articles</LinkChild>
            <LinkChild>Hindi Articles</LinkChild>
            <LinkChild>Care Plan</LinkChild>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Connect</ListHeader>
            <HStack>
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/733/733547.png"}
                h={"25px"}
              />
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}
                h={"25px"}
              />
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/3256/3256013.png"}
                h={"25px"}
              />
              <Image
                src={"https://cdn-icons-png.flaticon.com/128/3670/3670147.png"}
                h={"25px"}
              />
              <Image
                src={"https://cdn-icons-png.flaticon.com/512/3536/3536505.png"}
                h={"25px"}
              />
            </HStack>
            <Text fontSize={"14px"}>Want daily dose of health?</Text>
            <Button bg={"#fe6f60"} color={"#fff"}>
              SIGN UP
            </Button>
          </Stack>
          <Stack>
            <ListHeader>Download App</ListHeader>
            <Image
              width={"60%"}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              }
            />
            <Image
              width={"60%"}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
              }
            />
          </Stack>
        </SimpleGrid>
        <Divider py={5} />
      </Container>
      <Container>
        <Flex gap={5} justifyContent={"center"}>
          <Image
            src={"https://avatars.githubusercontent.com/u/1770189?s=280&v=4"}
            w={"20%"}
          />
          <Image src={"https://onemg.gumlet.io/URS_ebgmxc.png"} w={"20%"} />
        </Flex>
        <Text textAlign="center" color="#000" py={3} fontWeight={"600"}>
          India's only LegitScript and ISO/ IEC 27001 certified online
          healthcare platform
        </Text>
      </Container>
      <Divider py={5}  />
    </Box>
  );
}
