import React from "react";
import ReviewCard from "./ReviewCard";
import { Carousel } from "react-responsive-carousel";
import { landing } from "../static_content";

const ReviewCarousel = () => {
    return (
        <>
            <div className="review-carousel hidden lg:block py-10">
                <Carousel
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={35}
                    autoPlay={true}
                    interval={2000}
                    showStatus={false} showThumbs={false} showArrows={false}
                >
                    {/* <CarouselContent /> */}
                    {landing.review_card.map((review, i) => <ReviewCard name={review.name} role={review.role} image={review.image} review_text={review.review_text} score={review.score} key={i} />)}
                </Carousel>
            </div>
            <div className="review-carousel py-10 hidden sm:block lg:hidden">
                <Carousel
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={60}
                    autoPlay={true}
                    interval={2000}
                    showStatus={false} showThumbs={false} showArrows={false}
                >
                    {landing.review_card.map((review, i) => <ReviewCard name={review.name} role={review.role} image={review.image} review_text={review.review_text} score={review.score} key={i} />)}
                </Carousel>
            </div>
            <div className="review-carousel py-10 sm:hidden">
                <Carousel
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={100}
                    autoPlay={true}
                    interval={2000}
                    showStatus={false} showThumbs={false} showArrows={false}
                >
                    {/* <CarouselContent /> */}
                    {landing.review_card.map((review, i) => <ReviewCard name={review.name} role={review.role} image={review.image} review_text={review.review_text} score={review.score} key={i} />)}
                </Carousel>
            </div>
        </>
    );
}

export default ReviewCarousel;

// const CarouselContent = () => {
//     return (
//         <>
//             {landing.review_card.map((review, i) => <ReviewCard name={review.name} role={review.role} image={review.image} review_text={review.review_text} score={review.score} key={i} />)}
//         </>
//     )
// }
