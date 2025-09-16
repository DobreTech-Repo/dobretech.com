import React from "react";

const ReviewCard = ({name, role, image, review_text, score}) => (
    <div className="sm:px-2 xl:px-12 py-8">
        <div className="flex flex-wrap flex-col text-left content-between w-[100%] min-h-[410px] rounded-3xl p-8 review-carousel-card">
            <div>
                <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <img src={`/images/${image}`} alt={name} className="rounded-full" style={{width: '100px', height: '100px'}} />
                    <div>
                        <div className="sm:text-xl text-black font-bold">{name}</div>
                        <div className="text-secondary">{role}</div>
                    </div>
                </div>
                <div className="text-secondary py-4">
                    {review_text}
                </div>
            </div>
            <div className="text-2xl mt-auto">
                {
                    Array(score).fill(1).map((value, i) => <span className="text-[#FFB737]" key={i}>★</span>)
                }
                {
                    score < 5 && Array(5 - score).fill(1).map((value, i) => <span key={i}>★</span>)
                }
            </div>
        </div>
    </div>
)

export default ReviewCard;
