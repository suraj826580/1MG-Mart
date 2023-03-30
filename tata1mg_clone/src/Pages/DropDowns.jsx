import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Drop Down 1 { Health Resource Center }
const dropDown1 = [
  { title: "All Disease", fontWeight: "600" },
  { title: "All Medicines", fontWeight: "600" },
  { title: "Medicines by Therapeutic Class", fontWeight: "600" },
];
// Drop Down 1 { Health Resource Center }
const dropDown2 = {
  Vitamins_Supplements: [
    { title: "Multivitamins" },
    { title: "Vitamins A to Z" },
    { title: "Minearls Supplements" },
    { title: "Vitamins B12 & B Complex" },
  ],
  Nutrional_Drinks: [
    { title: "Adult Daily Nutrition" },
    { title: "Kids Nutrition" },
    { title: "Womens Nutrition" },
  ],
};

// Drop Down 3 { Diabities }
const dropDown3 = {
  Diabities_Monitioring: [
    { title: "Blood Gloucose Monitoring" },
    { title: "Test Strip and Lancets" },
    { title: "Syringes and Pens" },
    { title: "Continous glucose monitors" },
  ],
};

const MenuCompo = ({ title, fontWeight }) => {
  return (
    <>
      <MenuItem
        p={1}
        fontSize="10px"
        fontWeight={fontWeight}
        _hover={{ color: "#fe6f60", bg: "#fff" }}>
        {title}
      </MenuItem>
    </>
  );
};

export default function DropDowns() {
  return (
    <>
      {" "}
      <Box py={1}>
        <Flex gap={10} justifyContent={"center"}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"} rightIcon={<ChevronDownIcon />}>
                  Health Resource Center
                </MenuButton>
                <MenuList fontSize={"12px"}>
                  {dropDown1.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                </MenuList>
              </>
            )}
          </Menu>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"} rightIcon={<ChevronDownIcon />}>
                  Vitamins & Nutrition
                </MenuButton>

                <MenuList fontSize={"12px"} p={0}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Vitamins & Supplements
                  </Text>
                  {dropDown2.Vitamins_Supplements.map((item, id) => {
                    return (
                      <>
                        <MenuCompo key={id} {...item} />
                      </>
                    );
                  })}
                  <Text py={2} px={1} fontWeight={600} fontSize="12px">
                    Nutrional Drinks
                  </Text>
                  {dropDown2.Nutrional_Drinks.map((item, id) => {
                    return (
                      <>
                        <MenuCompo key={id} {...item} />
                      </>
                    );
                  })}
                </MenuList>
              </>
            )}
          </Menu>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"}>Diabetes</MenuButton>
                <MenuList fontSize={"12px"}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Diabities Monitoring
                  </Text>
                  {dropDown3.Diabities_Monitioring.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Sugar Free
                  </Text>
                </MenuList>
              </>
            )}
          </Menu>{" "}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"}>Healthcare Devices</MenuButton>
                <MenuList fontSize={"12px"}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Healthcare Devices
                  </Text>
                  {dropDown3.Diabities_Monitioring.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Sugar Free
                  </Text>
                </MenuList>
              </>
            )}
          </Menu>{" "}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"}>Covid Essentials</MenuButton>
                <MenuList fontSize={"12px"}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Personal Care
                  </Text>
                  {dropDown3.Diabities_Monitioring.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Sugar Free
                  </Text>
                </MenuList>
              </>
            )}
          </Menu>{" "}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"}>Personal Care</MenuButton>
                <MenuList fontSize={"12px"}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Diabities Monitoring
                  </Text>
                  {dropDown3.Diabities_Monitioring.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Sugar Free
                  </Text>
                </MenuList>
              </>
            )}
          </Menu>{" "}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"}>Health Conditions</MenuButton>
                <MenuList fontSize={"12px"}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Diabities Monitoring
                  </Text>
                  {dropDown3.Diabities_Monitioring.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Sugar Free
                  </Text>
                </MenuList>
              </>
            )}
          </Menu>{" "}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"}>Ayurveda Products</MenuButton>
                <MenuList fontSize={"12px"}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Diabities Monitoring
                  </Text>
                  {dropDown3.Diabities_Monitioring.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Sugar Free
                  </Text>
                </MenuList>
              </>
            )}
          </Menu>{" "}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"}>Homeopathy</MenuButton>
                <MenuList fontSize={"12px"}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Diabities Monitoring
                  </Text>
                  {dropDown3.Diabities_Monitioring.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Sugar Free
                  </Text>
                </MenuList>
              </>
            )}
          </Menu>{" "}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton fontSize={"12px"}>Featured</MenuButton>
                <MenuList fontSize={"12px"}>
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Diabities Monitoring
                  </Text>
                  {dropDown3.Diabities_Monitioring.map((item, id) => {
                    return <MenuCompo key={id} {...item} />;
                  })}
                  <Text px={1} fontWeight={600} py={2} fontSize="12px">
                    Sugar Free
                  </Text>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Box>
      <Divider />
    </>
  );
}

// #fe6f60
