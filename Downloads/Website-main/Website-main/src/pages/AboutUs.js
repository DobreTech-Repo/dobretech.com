import React from "react";
import { Link } from "react-router-dom";
import ReviewCarousel from "../components/ReviewCarousel";
import { aboutus } from "../static_content";

const AboutInfo = ({title, icon, text}) => {
    return (
        <div className="flex items-center gap-5 py-5">
            <img src={`/images/icons/${icon}.svg`} alt={title} className="w-24" />
            <div className="">
                <h4 className="text-primary text-2xl font-semibold">{title}</h4>
                <p className="text-secondary">{text}</p>
            </div>
        </div>
    )
};

const ELearning = ({icon, text}) => (
    <div className="flex items-center py-5 gap-10">
        <img src={`/images/icons/${icon}.svg`} alt={icon} />
        <p className="text-xl text-secondary">{text}</p>
    </div>
)


const AboutUs = () => {
    return (
        <div className="px-5 py-10">
            <h1 className="text-primary text-5xl text-center font-semibold sm:mt-20">About Us</h1>
            <h5 className="text-xl text-secondary text-center">Our Story of Innovation and Impact</h5>
            <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
                <div className="w-[560px]">
                    {aboutus.info.map((info, i) => (
                        <AboutInfo title={info.title} icon={info.icon} text={info.text} key={i} />
                    ))}
                </div>
                <img src="/images/aboutus.png" alt="About Us" className="w-[600px]" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-20">
                <div className="w-[600px]">
                    <h2 className="text-5xl text-center text-primary font-semibold">Find More About Us E-Learning Experience</h2>
                    <p className="text-secondary text-center text-xl py -2">Why Choose Us</p>
                    <img src="/images/aboutus_elearning.png" alt="About us learning" className="" />
                </div>
                <div className="">
                    {
                        aboutus.e_learning.map((item, i) => (
                            <ELearning icon={item.icon} text={item.text} key={i} />
                        ))
                    }
                </div>
            </div>
            <div className="sm:px-20 mt-5 sm:mt-16">
                <h4 className="text-primary text-2xl font-semibold">What Our Clients Say About Us</h4>
                <h3 className="text-primary text-5xl font-semibold mt-3">Why not join us now</h3>
            </div>
            <ReviewCarousel />
            <div className="dobre-signify text-center text-white px-5 py-16">
                <h3 className="text-3xl sm:text-4xl font-semibold">What Does DobreTech Signify</h3>
                <h4 className="text-2xl sm:text-3xl  leading-10 sm:px-20 mt-5 max-w-[1200px] mx-auto">Dobre is a Polish word meaning Good and that is where we got the name of our firm Dobre Technologies</h4>
                {/* <div className="py-2"> */}
                    {/* <p className="text-xl py-3">Variants: Dobry, Dobriak</p>
                    <p className="text-xl py-3">Etymology</p>
                    <p className="text-xl py-3">From dobrý (“good”)</p>
                    <p className="text-xl py-3">Pronunciation</p>
                    <p className="text-xl py-3">IPA(key): /ˈdɔbrɛ/</p>
                    <p className="text-xl py-3">Adverb</p>
                    <p className="text-xl py-3">dobre (comparative lepšie, superlative najlepšie)</p> */}
                {/* </div> */}
            </div>
            <div className="text-center mt-6 sm:mt-20 max-w-[1200px] mx-auto">
                <h5 className="text-primary text-2xl sm:text-3xl font-semibold py-2">Welcome To DobreTech</h5>
                <h4 className="text-primary text-3xl sm:text-5xl font-semibold py-4">New Experience! Learn to the Next Level</h4>
                <p className="text-secondary text-xl leading-10 max-w-[1200px] mx-auto">
                    Were we turn every class into an engaging, practical and networking journey<br />
                    where our students learn theory, indepth concepts and perform hands-on practice in real-world scenarios.<br />
                    Looking for a change that brings more than just a job, but a better life?
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-20 my-20">
                <img src="/images/aboutus_career.png" alt="Career" className="w-[600px]" />
                <div className="text-xl">
                    <h6 className="text-2xl text-primary font-semibold py-5">DobreTech your number one Choice</h6>
                    <div className="flex items-center gap-3 text-secondary py-3">
                        <img src="/images/icons/dot.svg" alt="dot" />
                        <span>The foundation for a lifetime of success</span>
                    </div>
                    <div className="flex items-center gap-3 text-secondary py-3">
                        <img src="/images/icons/dot.svg" alt="dot" />
                        <span>Find the right instructor for you</span>
                    </div>
                    <div className="flex items-center gap-3 text-secondary py-3">
                        <img src="/images/icons/dot.svg" alt="dot" />
                        <span>Popular topics in cutting-Edge Technology</span>
                    </div>
                    <div className="flex items-center gap-2 py-5">
                        <img src="/images/icons/user.svg" alt="user" className="w-20" />
                        <div>
                            <h5 className="text-2xl text-primary">Kenne Japhet Elvis</h5>
                            <p className=" text-secondary">Operations Director</p>
                        </div>
                    </div>
                    <Link to='./' className="bg-tomato text-white text-center text-base inline-block rounded-md w-40 py-2 active:font-semibold">Explore More</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
