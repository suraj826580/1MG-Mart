import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import GenericCarouselCard from "./GenericCarouselCard";
import axios from "axios";

export default function GenericCarousel({ url, heading }) {
  const [data, setdata] = useState("");
  const [slider, setSlider] = useState(data);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  //   Get Data
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box position={"relative"}>
        <Box position={"absolute"} top="50%" width="100%" zIndex={1}>
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
          <Flex justifyContent={"space-between"} alignItems={"center"} py={5}>
            <Text ml={10} fontSize="25px" fontWeight={600}>
              {heading}
            </Text>
            <Button bg={"#fe6f60"} color={"#fff"}>
              See More
            </Button>
          </Flex>
          <Divider />
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {data.length > 0 &&
              data?.map((item) => (
                <GenericCarouselCard {...item} key={Math.random()} />
              ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
}
