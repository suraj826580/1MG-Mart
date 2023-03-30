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

const feauredBrands = [
  {
    title: "Baidyanath",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/dd8872f8-efb2-4bf1-a79a-50ebfef0a683.png",
  },

  {
    title: "Wellness",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/b7d1661c-8bc9-4d7a-80ef-0385dbe98dbc.png",
  },
  {
    title: "Vicks",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/779ebeb5-e632-4893-b85e-25c82451a87a.png",
  },
  {
    title: "Bournvita",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/1e9eba14-0dff-443c-96c7-018d7283622b.png",
  },
  {
    title: "Nivea",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/5361468d-aaa9-4f58-829a-5d69f335924d.png",
  },
  {
    title: "Gyonveda",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/7b8dfa55-148b-4a0b-ad0c-4df058320046.png",
  },
  {
    title: "Healthkart",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4f693912-0a1d-4449-aee4-1e4b3ef04b49.png",
  },
  {
    title: "Tejasya Ayurveda",
    image:
      "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/459ab067-8cb6-446a-b0d1-8b8a718ad701.png",
  },
];

export default function FeauredBrands() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  const [slider, setSlider] = useState(feauredBrands);
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
            Featured brands
          </Text>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {feauredBrands.map((item) => {
              return <SimpleCard {...item} />;
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
}
