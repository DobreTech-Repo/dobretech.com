import React from "react";
import { Link, useParams } from "react-router-dom";
import { events } from "../static_content";

const EventDetail = () => {
    const {id} = useParams();
    const event = events[id - 1];
    return (
        <div className="max-w-[1400px] flex flex-col lg:flex-row justify-center gap-10 mx-auto px-5 py-20 mb-20">
            <div className="news-other-card w-full lg:max-w-[800px] p-10">
                <h2 className="text-primary text-2xl sm:text-4xl font-semibold">{event.title}</h2>
                <p className="text-secondary text-justify mt-10 leading-10">{event.content}</p>
                <div className="flex flex-wrap mt-10 gap-8">
                    <div className="flex gap-2">
                        <img src="/images/icons/events_calendar.svg" alt="event date" className="w-5" />
                        <span className="text-tomato">{event.start_date}</span>
                    </div>
                    <div className="flex gap-2">
                        <img src="/images/icons/events_content_location.svg" alt="event date" className="w-5" />
                        <span className="text-secondary">{event.location}</span>
                    </div>
                </div>
            </div>
            <div className="flex items-start">
                <div className="news-other-card w-full lg:w-[360px] p-10">
                    <div className="flex items-center gap-3">
                        <img src="/images/icons/events_content_info.svg" alt="content info" className="w-12" />
                        <h5 className="text-primary text-3xl font-semibold">Events Info</h5>
                    </div>
                    <div className="mt-10">
                        <div className="flex items-center gap-4 py-2">
                            <img src="/images/icons/events_content_calendar.svg" alt="start date" className="w-6" />
                            <p className="text-secondary">Start Date: {event.start_date}</p>
                        </div>
                        <div className="flex items-center gap-4 py-2">
                            <img src="/images/icons/events_content_clock.svg" alt="start time" className="w-6" />
                            <p className="text-secondary">Start Time: {event.start_time}</p>
                        </div>
                        <div className="flex items-center gap-4 py-2">
                            <img src="/images/icons/events_content_sandclock.svg" alt="end date" className="w-6" />
                            <p className="text-tomato">End Date: {event.end_date}</p>
                        </div>
                        <div className="flex items-center gap-4 py-2">
                            <img src="/images/icons/events_content_endtime.svg" alt="end time" className="w-6" />
                            <p className="text-tomato">End Time: {event.end_time}</p>
                        </div>
                        <div className="flex items-center gap-4 py-2">
                            <img src="/images/icons/events_content_id.svg" alt="participants" className="w-6" />
                            <p className="text-secondary">Number of Participants: {event.participants}</p>
                        </div>
                        <div className="flex items-center gap-4 py-2">
                            <img src="/images/icons/events_content_primary_location.png" alt="location" className="w-6" />
                            <p className="text-secondary">Location: {event.location}</p>
                        </div>
                        <div className="flex items-center gap-4 py-2">
                            <img src="/images/icons/events_content_link.svg" alt="link" className="w-6" />
                            <p className="text-[#00B2FF]" style={{wordBreak: 'break-all'}}><Link to={event.link} target="_BLANK">{event.link}</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetail;
