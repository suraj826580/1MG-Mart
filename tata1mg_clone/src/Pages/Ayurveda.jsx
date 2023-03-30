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

const ayurveda = [
  {
    title: "Dabur",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/onneibznnitqsn5twumi.png",
  },
  {
    title: " Baidyanath",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/dekl61bd9thu21vmypkm.png",
  },
  {
    title: "Dhootapapershwar",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/idgjl700nkz6w8lzvjwc.png",
  },
  {
    title: "Sri Care",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/kvwlak2daqdzaflvgx2u.png",
  },
  {
    title: "Jiva and Ayurveda",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/guiy84rk41kgofd5atft.png",
  },
  {
    title: "Kerela Ayurveda",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/shxhntpjye31tu8frfjs.png",
  },
  {
    title: "Zandu",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/kvwlak2daqdzaflvgx2u.png",
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

export default function Ayurveda() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  const [slider, setSlider] = useState(ayurveda);
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
            Ayurveda
          </Text>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {ayurveda.map((item) => {
              return <SimpleCard {...item} key={Math.random()} />;
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
}
