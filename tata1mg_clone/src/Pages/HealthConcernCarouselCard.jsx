import React, { useState } from "react";
import SimpleCard from "./SimpleCard";
import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const healthConcerns = [
  {
    title: "Diabetes Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
  },
  {
    title: "Cardiac Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
  },
  {
    title: "Stomach Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
  },
  {
    title: "Liver Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
  },
  {
    title: "Bone Joints & Muscle Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
  },
  {
    title: "Kidney Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
  },
  {
    title: "Derma Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/6f9a726a-4a98-42e6-a834-67381be5e330.png",
  },
  {
    title: "Respiratory Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
  },
  {
    title: "Eye Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
  },
];

export default function HealthConcernCarouselCard() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  const [slider, setSlider] = useState(healthConcerns);
  return (
    <>
      <Box position={"relative"}>
        <Box position={"absolute"} top="35%" width="100%" zIndex={1}>
          <Flex justifyContent={"space-between"} px={9}>
            <FontAwesomeIcon
              fontSize={"40px"}
              color="#fe6f60"
              icon={faCircleChevronLeft}
              onClick={(e) => slider.slickPrev()}
            />

            <FontAwesomeIcon
              color="#fe6f60"
              fontSize={"40px"}
              icon={faCircleChevronRight}
              onClick={(e) => slider.slickNext()}
            />
          </Flex>
        </Box>
        <Box px={10}>
          <Text ml={10} fontSize="20px" fontWeight={600}>
            Shop by health concerns
          </Text>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {healthConcerns.map((item) => {
              return <SimpleCard {...item} key={Math.random()} />;
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
}
