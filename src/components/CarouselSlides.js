import React from "react";
import { Link } from "react-router-dom";
import { landing } from "../static_content";

const CarouselSlide1 = () => {
    return (
        <div className="relative text-white text-left">
            <img src="/images/landing_carousel_1.png" alt="carousel" className="" />
            <div className="absolute top-[2%] sm:top-[15%] left-[8%]">
                <h2 className="text-[14px] sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">{landing.carousel.welcome}</h2>
                <div className="text-[10px] sm:text-base md:text-xl py-2 sm:py-5">
                    {landing.carousel.content1.map((text, i) => <div className="" key={i}>{text}</div>)}
                </div>
                <Link to='/aboutus' className="inline-block text-[10px] sm:text-base lg:text-xl  lg:mt-[10%] px-3 sm:px-10 sm:py-2 border-2 rounded-md sm:rounded-xl">About</Link>
            </div>
            <div className="absolute left-[30%] lg:left-[40%] bottom-1 sm:bottom-12 lg:bottom-24 xl:bottom-36 flex gap-2 lg:gap-6">
                <div className="h-[60px] sm:h-[120px] md:h-[180px]">
                    <img src="/images/vertical_stuff.svg" alt="vertical line" className="h-full" />
                </div>
                <div className="">
                    <div className="">
                        {landing.carousel.batch_notification.map((content,index) => (
                            <div className="text-xs sm:text-base" key={index}>{content}</div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-3 py-1">
                        <div className="flex h-[30px] sm:h-[50px] md:h-[100px]">
                            <img src="/images/university_logo.png" className="h-full" alt="university" />
                        </div>
                        <div className="flex h-[30px] sm:h-[50px] md:h-[120px]">
                            <img src="/images/logox150.png" className="h-full" alt="university" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CarouselSlide2 = () => {
    return (
        <div className="relative text-left">
            <div className="relative mt-[5%] sm:mt-[10%] ml-[5%] z-10">
                <h2 className="text-xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">{landing.carousel.welcome}</h2>
                <div className="text-secondary text-xs sm:text-base md:text-xl py-2 sm:py-5">
                    {landing.carousel.content2.map((text, i) => <div className="py-1" key={i}>{text}</div>)}
                </div>
                <Link to='/services' className="inline-block bg-tomato text-white text-[12px] sm:text-base  sm:mt-[6%] md:mt-[10%] px-3 sm:px-5 py-1 sm:py-2 rounded-md z-10">Consulting Services</Link>
            </div>
            <div className="absolute top-0 right-[5%] w-[60%]">
                <img src="/images/landing_carousel_2.png" alt="carousel 2" className="" />
            </div>
        </div>
    )
};

const CarouselSlide3 = () => {
    return (
        <div className="relative text-left flex items-center">
            <div className="w-[40%]">
                <img src="/images/landing_carousel_3.png" alt="carousel 2" className="" />
            </div>
            <div className="relative w-[60%] mt-[3%] sm:mt-[8%] ml-[2%] sm:ml-[5%] z-10 px-2 sm:px-5">
                <h2 className="text-sm sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">{landing.carousel.commit}</h2>
                <div className="text-secondary text-[10px] sm:text-base md:text-xl py-2 md:py-3">
                    {landing.carousel.content3.map((text, i) => <div key={i}>{text}</div>)}
                </div>
                <div className="text-right pr-12">
                    {/* <Link to='/news' className="hidden sm:inline-block bg-tomato text-white text-[12px] md:text-base mt-[-3%] md:mt-[10%] px-3 sm:px-5 py-1 sm:py-2 rounded-md ml-auto">Explore Our Courses</Link> */}
                </div>
            </div>
        </div>
    )
};
const CarouselSlide4 = () => {
    return (
        <div className="relative text-left">
            <div className="relative mt-[5%] sm:mt-[10%] ml-[5%] z-10">
                <h2 className="text-base sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">{landing.carousel.linking}</h2>
                <div className="text-secondary text-xs sm:text-base md:text-xl py-2 sm:py-5">
                    {landing.carousel.content4.map((text, i) => <div className="py-1" key={i}>{text}</div>)}
                </div>
                <div className="mt-[10%] sm:mt-0">
                    {/* <Link to='/news' className="inline-block bg-primary text-white text-[12px] sm:text-base  sm:mt-[10%] px-3 sm:px-5 py-1 sm:py-2 rounded-md z-10">Career Path Coureses</Link>
                    <Link to='/news' className="inline-block bg-tomato text-white text-[12px] sm:text-base  sm:mt-[10%] px-3 sm:px-5 py-1 sm:py-2 rounded-md ml-2 z-10">Certification Coureses</Link> */}
                </div>
            </div>
            <div className="absolute top-0 right-[5%] w-[60%]">
                <img src="/images/landing_carousel_4.png" alt="carousel 2" className="" />
            </div>
        </div>
    )
}

export {CarouselSlide1, CarouselSlide2, CarouselSlide3, CarouselSlide4};
