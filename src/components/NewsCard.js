import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({id, image, title, date, number}) => {
    return (
        <div className="flex flex-col w-[360px] rounded-3xl landing-readmore-button my-5">
            <div className="w-[360px]">
                <img src={image} alt="news" className="rounded-t-3xl w-full h-full" />
            </div>
            <h4 className="text-secondary text-xl px-10 py-6">{title}</h4>
            <div className="mt-auto flex justify-between items-center px-5 py-5">
                <div className="flex gap-2">
                    <div className="flex gap-1">
                        <img src="/images/icons/calender.svg" alt="calender" className="" />
                        <div className="text-tomato">{date}</div>
                    </div>
                    <div className="flex gap-1">
                        <img src="/images/icons/message.svg" alt="message" className="" />
                        <div className="text-primary">{number}</div>
                    </div>
                </div>
                <Link to={`/news/${id}`} className="bg-primary text-white px-4 py-1 rounded-md">Read More</Link>
            </div>
        </div>
    )
}

export default NewsCard;
