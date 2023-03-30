import React from "react";
import Slider from "react-slick";
import { Image, Box, Text, Center, Divider } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderImages = [
  "https://onemg.gumlet.io/72f81f62-1e64-4418-a0c4-1f7e22da6780_1679641339.png?w=1013&h=250&format=auto",
  "https://onemg.gumlet.io/95a1dc10-5e23-495d-88cc-f398622c1715_1678907436.png?w=1013&h=250&format=auto",
  "https://onemg.gumlet.io/63bea173-5334-47ad-8d90-a1a78fb3212c_1679383386.png?w=1013&h=250&format=auto",
  "https://onemg.gumlet.io/6f270cf5-44bb-4c9d-86f8-b1ecd2ba2bb9_1679557477.png?w=1013&h=250&format=auto",
  "https://onemg.gumlet.io/38cc426b-ade4-48b3-8b59-a73339915244_1679393359.png?w=1013&h=250&format=auto",
  "https://onemg.gumlet.io/9b011fe6-ddf6-46a7-a3e4-f965e7afb8eb_1679997283.png?w=1013&h=250&format=auto",
  "https://onemg.gumlet.io/f534ee65-9963-478a-a075-e0b0aef1ef46_1679397312.png?w=1013&h=250&format=auto",
  "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/5cb704ba-e63e-473d-92c7-693cc8ea019d.png",
  "https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/55862f78-7fff-4519-82fc-ebab1e517fdf.png",
];

export default function HeaderCarousel() {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Box>
      <Slider {...settings}>
        {sliderImages.map((item, ind) => (
          <Box key={ind} outline="none">
            <Image src={item} w={"100%"} h={"220px"} />
          </Box>
        ))}
      </Slider>
      <Center fontSize="22px">
        <Text my={"10px"} color={"#676d73"}>
          Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
        </Text>
      </Center>
      <Divider borderColor={"#676d73"} />
    </Box>
  );
}
