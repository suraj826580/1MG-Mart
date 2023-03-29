import React from "react";
import Carousel from "react-multi-carousel"; 
import 'react-multi-carousel/lib/styles.css'
import { Box } from "@chakra-ui/react";

const bannerData=[
    { id:1 , url:'https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png',text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, consectetur?"},
    { id:2 , url:'https://www.1mg.com/images/login-signup/Know-Your-Medicines.png',text:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil error voluptates omnis."},
    { id:3 , url:'https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png',text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nihil error voluptates omnis iste corrupti veritatis corporis quasi, tempora atque."},
    { id:4 , url:'https://www.1mg.com/images/login-signup/Health-Related-Queries.png',text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, consectetur?"}
]

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
    
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },

    
  };

 const Banner=()=>{
    return (
        <Carousel responsive={responsive}
        swipeable={false} 
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        slidesToSlide={1}
        arrows={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
       {bannerData.map(data => (
        <Box key={data.id} style={{width:"100%",height:"300px",padding:"50px", alignItems: 'center',textAlign: 'center',}}>
            <img style={{width:"30%",marginLeft:"35%"}} src={data.url} alt="banner"/>
            <p>{data.text}</p>
        </Box>
       ))}


        </Carousel>

    )
  }

  export default Banner;