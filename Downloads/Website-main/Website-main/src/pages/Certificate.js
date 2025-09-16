import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import certificatesData from "../certificateData";

export default function Certificate() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const foundCertificate = certificatesData.find(
      (cert) => cert.studentId === search
    );
    if (foundCertificate === undefined) {
      console.log("Very bad");
      setResult(null);
    } else {
      setResult(foundCertificate);
      console.log("Search", foundCertificate);
    }
    setSearched(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className='flex flex-col sm:flex-row'>
      <img
        className='w-[100%] px-[7%] py-[10%] sm:w-[50%]'
        src='/images/certificate.png'></img>
      <div className='w-[100%] flex flex-col justify-center items-center'>
        <div className='px-[2rem]'>
          <div className='mb-[24px]'>
            <span className='text-[24px] font-[700] text-[#07bc0c]'>
              DobreTech |{" "}
            </span>
            <span className='text-[24px] text-[#6F638D]'>
              Certificate Verification
            </span>
          </div>
          <p className='text-[#001489] text-[18px]'>
            Enter the certificate reference ID as seen on the certificate to
            verify
          </p>
        </div>
        <div className='w-[100%] py-[2rem]'>
          <div className='flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md font-[sans-serif] mx-[2rem] sm:mx-[auto]'>
            <input
              type='email'
              placeholder='Code: UB/DTXX/XXBXXX'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className='w-full outline-none bg-white text-gray-600 text-sm px-4 py-3'
            />
            <button
              type='button'
              className='flex items-center justify-center bg-[#1aabff] px-5'
              onClick={handleSearch}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 192.904 192.904'
                width='16px'
                className='fill-white'>
                <path d='m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z'></path>
              </svg>
            </button>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-[380px] mr-[-42px] sm:mr-[8rem]'>
              {searched && result && (
                <div className='mt-4 text-green-600'>
                  <p className='text-[20px]'>Certificate Found:</p>
                  <p>Full Name: {result.name}</p>
                  <p>Issue Date: {result.issueDate}</p>
                  <p>Issued by: {result.issuer}</p>
                </div>
              )}
              {searched && result === null && search && (
                <div className='mt-4 text-red-600'>
                  <p>Certificate not found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
