// import React from "react";
// import { Image } from "@chakra-ui/react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const ImageSlider = ({ slides }) => {
//     return (
//         <Carousel renderItem={(item, { isSelected })
//         } infiniteLoop maxW='400px' maxH='400px' showIndicators={false} dynamicHeight={true} showThumbs={false} >
//             {
//                 slides.map((slide, index) => {
//                     console.log(slide);
//                     return < Image h='full' key={index} src={slide.image} />
//                 })
//             }
//         </Carousel >
//     );
// };

// export default ImageSlider;

import React, { useState, useEffect, useContext } from "react";
import { AvatarData } from "../Component/AvatarData";
import { Flex, Box } from "@chakra-ui/react";
import { userContext } from "../UserContext";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";

const ImageSlider = ({ slides }) => {
    const { curr, setCurr } = useContext(userContext);
    const arr = slides.arr;

    const nSlides = () => {
        setCurr(curr === arr - 1 ? 0 : curr + 1);
    };

    const pSlides = () => {
        setCurr(curr === 0 ? arr - 1 : curr - 1);
    };

    if (!Array.isArray(slides) || slides.arr <= 0) {
        return null;
    }

    return (
        <Flex justifyContent="center" alignItems="center" flexDir="column">
            <section className="carousel">
                {AvatarData.map((slide, index) => {
                    return (
                        <Flex className={index === curr ? "slide active" : "slide"} key={index}>
                            {index === curr && (<img width="300px" src={slide.image} alt="travel image" className="image" />)}
                        </Flex>
                    );
                })}
            </section>
            <Flex>
                <Box p="10px">
                    <ImArrowLeft color="#EAE0D5" onClick={() => {
                        pSlides();
                    }} />
                </Box>
                <Box p="10px">
                    <ImArrowRight color="#EAE0D5" onClick={() => {
                        nSlides();
                    }} />
                </Box>
            </Flex>
        </Flex>
    )
};
export default ImageSlider;