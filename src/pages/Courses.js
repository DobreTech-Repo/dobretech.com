import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { courses } from "../static_content";

const Courses = () => {
  const [page, setPage] = useState(0);
  const { course_type } = useParams();
  const course = courses[course_type.replace("-", "_")];
  return (
    <div className='max-w-[1400px] mx-auto'>
      <h1 className='text-3xl sm:text-5xl text-primary text-center font-semibold mt-20 px-2'>
        Cybersecurity Engineer
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center mt-5 sm:mt-20 px-5 py-3 gap-16'>
        <div className='flex justify-center gap-8'>
          <div className='text-center w-[140px]'>
            <img
              src='/images/icons/community_calender.svg'
              className='w-24 mx-auto'
              alt='start date'
            />
            <h5 className='text-2xl text-primary font-semibold'>Start Date</h5>
            <p className='text-secondary'>{course.start_date}</p>
          </div>
          <div className='text-center w-[140px]'>
            <img
              src='/images/icons/community_network.svg'
              className='w-24 mx-auto'
              alt='start date'
            />
            <h5 className='text-2xl text-primary font-semibold'>100% Online</h5>
            <p className='text-secondary'>On-Campus</p>
          </div>
        </div>
        <div className='news-other-card flex flex-col lg:flex-row justify-between items-center p-6 w-auto md:w-[800px]'>
          <p className='text-secondary text-center lg:text-left max-w-[440px]'>
            {course.features.map((feature, i) => (
              <div key={i}>{feature}</div>
            ))}
          </p>
          <Link
            to='/registration'
            className='bg-primary px-10 py-2 my-5 rounded-md'>
            Apply Now
          </Link>
        </div>
      </div>
      <div className='flex justify-center items-center md:gap-16 lg:gap-40 mt-20 max-w-[1400px] mx-auto px-5'>
        <div>
          <div className='flex items-center gap-3 font-semibold py-3'>
            <span className='bg-primary rounded-full w-3 h-3'></span>
            <h6
              className={`cursor-pointer ${
                page === 0 ? "text-tomato text-xl" : "text-secondary"
              }`}
              onClick={() => setPage(0)}>
              Course Overview
            </h6>
          </div>
          {/* show in specific screen size */}

          {page === 0 && (
            <div className='news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]'>
              <p
                className='p-1'
                dangerouslySetInnerHTML={{ __html: course.overview }}></p>
            </div>
          )}
          {/* end */}
          <div className='flex items-center gap-3 text-secondary font-semibold py-3'>
            <span className='bg-primary rounded-full w-3 h-3'></span>
            <h6
              className={`cursor-pointer ${
                page === 1 ? "text-tomato text-xl" : "text-secondary"
              }`}
              onClick={() => setPage(1)}>
              Curriculum
            </h6>
          </div>
          {page === 1 && (
            <div className='news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]'>
              <p
                className='p-1'
                dangerouslySetInnerHTML={{ __html: course.curriculum }}></p>
            </div>
          )}
          <div className='flex items-center gap-3 text-secondary font-semibold py-3'>
            <span className='bg-primary rounded-full w-3 h-3'></span>
            <h6
              className={`cursor-pointer ${
                page === 2 ? "text-tomato text-xl" : "text-secondary"
              }`}
              onClick={() => setPage(2)}>
              Certification Covered
            </h6>
          </div>
          {page === 2 && (
            <div className='news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]'>
              <p
                className='p-1'
                dangerouslySetInnerHTML={{ __html: course.covered }}></p>
            </div>
          )}
          <div className='flex items-center gap-3 text-secondary font-semibold py-3'>
            <span className='bg-primary rounded-full w-3 h-3'></span>
            <h6
              className={`cursor-pointer ${
                page === 3 ? "text-tomato text-xl" : "text-secondary"
              }`}
              onClick={() => setPage(3)}>
              Audience & Requirements
            </h6>
          </div>
          {page === 3 && (
            <div className='news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]'>
              <p
                className='p-1'
                dangerouslySetInnerHTML={{ __html: course.requirements }}></p>
            </div>
          )}
          <div className='flex items-center gap-3 text-secondary font-semibold py-3'>
            <span className='bg-primary rounded-full w-3 h-3'></span>
            <h6
              className={`cursor-pointer ${
                page === 4 ? "text-tomato text-xl" : "text-secondary"
              }`}
              onClick={() => setPage(4)}>
              Tuition & Payment
            </h6>
          </div>
          {page === 4 && (
            <div className='news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]'>
              <p
                className='p-1'
                dangerouslySetInnerHTML={{ __html: course.payment }}></p>
            </div>
          )}
          <div className='flex items-center gap-3 text-secondary font-semibold py-3'>
            <span className='bg-primary rounded-full w-3 h-3'></span>
            <h6
              className={`cursor-pointer ${
                page === 5 ? "text-tomato text-xl" : "text-secondary"
              }`}
              onClick={() => setPage(5)}>
              Delivery Duration
            </h6>
          </div>
          {page === 5 && (
            <div className='news-other-card text-secondary block md:hidden p-5 my-5 max-w-[500px]'>
              <p
                className='p-1'
                dangerouslySetInnerHTML={{ __html: course.duration }}></p>
            </div>
          )}
        </div>
        {/* show specific screen size */}
        {page === 0 && (
          <div className='news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]'>
            <p
              className='p-1'
              dangerouslySetInnerHTML={{ __html: course.overview }}></p>
          </div>
        )}
        {page === 1 && (
          <div className='news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]'>
            <p
              className='p-1'
              dangerouslySetInnerHTML={{ __html: course.curriculum }}></p>
          </div>
        )}
        {page === 2 && (
          <div className='news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]'>
            <p
              className='p-1'
              dangerouslySetInnerHTML={{ __html: course.covered }}></p>
          </div>
        )}
        {page === 3 && (
          <div className='news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]'>
            <p
              className='p-1'
              dangerouslySetInnerHTML={{ __html: course.requirements }}></p>
          </div>
        )}
        {page === 4 && (
          <div className='news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]'>
            <p
              className='p-1'
              dangerouslySetInnerHTML={{ __html: course.payment }}></p>
          </div>
        )}
        {page === 5 && (
          <div className='news-other-card text-secondary hidden md:block p-5 my-5 w-[700px]'>
            <p
              className='p-1'
              dangerouslySetInnerHTML={{ __html: course.duration }}></p>
          </div>
        )}
        {/* end */}
      </div>
      <div className='my-20'>
        <img src={course.image} alt='mark' className='mx-auto' />
      </div>
    </div>
  );
};

export default Courses;
