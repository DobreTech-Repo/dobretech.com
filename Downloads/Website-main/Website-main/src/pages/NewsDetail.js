import React from "react";
import { Link, useParams } from "react-router-dom";
import { news_content } from "../static_content";

const NewsDetail = () => {
    // This is category id. could be used with backend.
    const {id} = useParams();
    console.log(id);
    const news = news_content[id-1]
    return (
        <div className="px-3 sm:px-10 max-w-[1400px] mx-auto mb-24">
            <AuthorInfoCard name={news.author.name} avatar={news.author.avatar} description={news.author.description} links={news.author.links} />
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 mt-5 lg:mt-16">
                <div className="mt-5 lg:mt-20">
                    <NewsCategories categories={blog_categories} />
                    <div className="news-other-card p-3 mt-10">
                        {news_content.map((news, i) => (
                            <OtherNews title={news.title} image={news.image} date={news.date} id={i+1} key={i} />
                        ))}
                    </div>
                </div>
                <div className="max-w-[980px]">
                    <NewsContent title={news.title} image={news.image} text={news.text} tags={news.tags} />
                </div>
            </div>
        </div>
    )
}

const AuthorInfoCard = ({name, avatar, description, links}) => {
    return (
        <div className="news-other-card flex flex-wrap justify-between items-center px-10 py-5 ml-auto mt-10 max-w-[800px]">
            <div className="flex flex-wrap justify-center items-center gap-5 py-3">
                <img src={avatar} alt="author" className="w-[80px] rounded-full" />
                <h6 className="text-primary text-4xl font-semibold">{name}</h6>
                <p className="text-secondary">{description}</p>
            </div>
            <div className="flex gap-3 py-3 mx-auto lg:mx-0">
                <Link to={links.facebook} target="_BLANK" className="">
                    <img src="/images/icons/facebook_primary.svg" alt="facebook" className="" />
                </Link>
                <Link to={links.twitter} target="_BLANK" className="">
                    <img src="/images/icons/twitter_primary.svg" alt="twitter" className="" />
                </Link>
                <Link to={links.linkedin} target="_BLANK" className="">
                    <img src="/images/icons/linkedin_primary.svg" alt="linkedin" className="" />
                </Link>
                <Link to={links.pinterest} target="_BLANK" className="">
                    <img src="/images/icons/pinterest_primary.svg" alt="pinterest" className="" />
                </Link>
            </div>
        </div>
    )
}

const NewsCategories = ({categories}) => {
    return (
        <div className="news-other-card p-5 min-w-[350px]">
            {categories.map((category, i) => (
                <div className="flex justify-between items-center py-1" key={i}>
                    <h6 className="text-secondary text-xl font-semibold">{category.category}</h6>
                    <div className="bg-primary text-center text-white w-10 py-1 rounded-lg">{category.items}</div>
                </div>
            ))}
        </div>)
}

const OtherNews = ({id, title, image, date}) => {
    return (
        <div className="flex gap-6 p-3">
            <img src={image} alt={title} className="w-20 h-20 rounded-2xl" />
            <div className="flex flex-col">
                <h6 className="text-secondary font-semibold">
                    <Link to={`/news/${id}`} className="hover:text-tomato">
                        {title}
                    </Link>
                </h6>
                <div className="flex gap-3 mt-auto">
                    <img src="/images/icons/calender.svg" alt="calender" className="w-4" />
                    <span className="text-tomato text-sm">{date}</span>
                </div>
            </div>
        </div>
    )
}

const NewsContent = ({title, image, tags, text}) => {
    return (
        <div className="news-detail-card">
            <h1 className="text-primary text-4xl font-semibold text-center py-20">{title}</h1>
            <img src={`${image}`} alt={title} className="w-full rounded-t-[20px] aspect-video" />
            <div className="mt-5">
                {tags.map((tag, i) => (
                    <span className="text-secondary px-4 py-1 mx-3 border rounded-md">{tag}</span>
                ))}
            </div>
            <p className="text-secondary text-justify p-5 sm:p-10" dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    )
}

const blog_categories = [
    {
        category: 'Cloud Computing',
        items: 4
    },
    {
        category: 'Consulting',
        items: 1
    },
    {
        category: 'Cyber Security',
        items: 3
    },
    {
        category: 'Development',
        items: 2
    },
    {
        category: 'Enterpreneurship',
        items: 2
    },
]

export default NewsDetail;
