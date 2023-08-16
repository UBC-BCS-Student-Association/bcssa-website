import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from '@/styles/BasicCarousel.module.css'

const CarouselItem = ({ image, altText, title, subTitle }) => (
    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
        <img src={image} alt={altText} className="object-cover object-center w-full" />
        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{title}</h2>
            <div className="flex h-full items-end pb-6">
                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{subTitle}</h3>
            </div>
        </div>
    </div>
);

export default function Carousel() {
    const slides = [
        { image: "https://i.ibb.co/fDngH9G/carosel-1.png", altText: "black chair and white table", title: "Catalog 1", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/DWrGxX6/carosel-2.png", altText: "sitting area", title: "Catalog 2", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/DWrGxX6/carosel-2.png", altText: "sitting area", title: "Catalog 2", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/DWrGxX6/carosel-2.png", altText: "sitting area", title: "Catalog 2", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/DWrGxX6/carosel-2.png", altText: "sitting area", title: "Catalog 2", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/DWrGxX6/carosel-2.png", altText: "sitting area", title: "Catalog 2", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/DWrGxX6/carosel-2.png", altText: "sitting area", title: "Catalog 2", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/DWrGxX6/carosel-2.png", altText: "sitting area", title: "Catalog 2", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/DWrGxX6/carosel-2.png", altText: "sitting area", title: "Catalog 2", subTitle: "Minimal Interior" },
        { image: "https://i.ibb.co/fDngH9G/carosel-1.png", altText: "black chair and white table", title: "Catalog 1", subTitle: "Minimal Interior" },
    ];

    const visibleSlides = 4;
    // Calculate the total pages based on the number of visible slides
    const totalPages = Math.ceil(slides.length / visibleSlides);

    return (
        <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                <CarouselProvider 
                    className="block md:block lg:block" 
                    naturalSlideWidth={100} 
                    isIntrinsicHeight={true} 
                    totalSlides={slides.length} 
                    visibleSlides={4} 
                    step={1} 
                    infinite={true}
                    // md={{ visibleSlides: 4 }}
                    // lg={{ visibleSlides: 4 }}
                >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            &#8592; {/* Unicode for left arrow */}
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                    {slides.map((slide, index) => (
                                        <Slide key={index} index={index}>
                                            <CarouselItem {...slide} />
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            &#8594; {/* Unicode for right arrow */}
                        </ButtonNext>
                    </div>
                    <div className="mt-4 flex">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <Dot slide={index * visibleSlides} key={index} className={styles['reset-element']}>
                                <span className="block w-4 h-4 bg-gray-400 rounded-full"></span>
                            </Dot>
                        ))}
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
