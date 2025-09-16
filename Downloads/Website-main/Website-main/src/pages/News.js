import React from "react";
import NewsCard from "../components/NewsCard";
import { news_content } from "../static_content";

const News = () => {
    return (
        <div>
            <div className="flex justify-center my-5 sm:my-20">
                <div className="relative">
                    <h2 className="text-4xl text-tomato font-semibold">Our Blog</h2>
                    <h1 className="text-primary text-5xl font-semibold">Latest News</h1>
                    {/* <img src="/images/icons/curved_line.svg" alt="saucy curve" className="absolute bottom-[-5px] right-[-50px]" /> */}
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 mb-20 max-w-[1200px] mx-auto">
                {news_content.map((item, i) => (
                    <NewsCard id={i+1} image={item.image} title={item.title} date={item.date} number={item.number} key={i} />
                ))}
            </div>
        </div>
    )
}

export default News
