import { AspectRatio, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
    return (
        <Carousel infiniteLoop maxW='400px' maxH='400px' showIndicators={false} dynamicHeight={true} showThumbs={false}>
            {slides.map((slide, index) => {
                return < Image h='full' key={index} src={slide.image} />
            })}
        </Carousel >
    );
};

export default ImageSlider;