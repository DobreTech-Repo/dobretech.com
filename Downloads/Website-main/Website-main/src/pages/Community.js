import React, { useState } from "react";
import { Link } from "react-router-dom";
import { events, monthAbbreviations } from "../static_content";

const Community = () => {
    return (
        <div className="max-w-[1400px] mx-auto mb-32">
            <h1 className="text-3xl sm:text-5xl text-center text-primary font-semibold py-10 sm:mt-10">Ignite Your Tech Journey!</h1>
            <div className="flex flex-wrap justify-center sm:gap-12">
                {events.map((event, i) => (
                    <div className="news-other-card flex text-primary w-[360px] sm:w-[560px] sm:h-[240px] rounded-[36px]" key={i}>
                        <div className="relative flex w-[160px] sm:w-[200px]">
                            <img src={event.image} alt="event brand" className="w-full my-auto" />
                            <div className="absolute bg-[#20FFF2] text-center text-primary w-16 sm:w-20 bottom-0 right-0">
                                <p className="text-xl sm:text-3xl font-bold">{(new Date(event.start_date)).getDate()}</p>
                                <p className="text-[12px] sm:text-sm">{monthAbbreviations[(new Date(event.start_date)).getMonth()]}, {(new Date(event.start_date)).getFullYear()}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-[200px] sm:w-[360px] px-4 pt-8 pb-4">
                            <h4 className="text-primary text-base sm:text-xl font-semibold">{event.title}</h4>
                            <div className="flex gap-3 mt-2">
                                <img src="/images/icons/events_location.svg" alt="location" className="w-8 sm:w-10" />
                                <p className="text-[12px] sm:text-sm text-secondary">{event.location}</p>
                            </div>
                            <div className="mt-2 sm:mt-auto flex flex-wrap justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/images/icons/events_clock.svg" alt="clock" className="w-5" />
                                    <span className="text-tomato text-sm">{event.duration}</span>
                                </div>
                                <Link to={`/community/events/${i+1}`} className="bg-primary text-white text-sm sm:text-base px-4 py-1 rounded-md">More Information</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Community;
