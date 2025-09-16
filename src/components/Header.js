import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { header } from "../static_content";

const Header = ({ openModal }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleMenuClick = (event) => {
    if (open) setOpen(false);
    else setOpen(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-[#001D44] flex px-3 py-1 sm:pl-10 md:pr-16 sm:py-3 items-center justify-between'>
      <div className='flex items-center'>
        <Link to='/' className='w-[75px]'>
          <img src='/images/logox75.png' alt='logo' />
        </Link>
        <div className='hidden sm:flex sm:gap-5 lg:gap-10 font-semibold sm:ml-5 md:ml-10 lg:ml-20'>
          {header.map((link, i) =>
            link.title === "Contact Us" ? (
              <span
                key={i}
                className='text-white cursor-pointer'
                onClick={openModal}>
                {link.title}
              </span>
            ) : (
              <Link
                to={link.path}
                className={
                  location.pathname === link.path
                    ? "text-[#26FFDA]"
                    : "text-white"
                }
                key={i}>
                {link.title}
              </Link>
            )
          )}
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <div className='text-sm hidden xl:block'>
          info@dobretech.com | +237 652632299
        </div>
        <Link to='/news' className='w-[20px]'>
          <img
            src='/images/icons/notification.svg'
            alt='notification'
            className='w-full'
          />
        </Link>
        <button
          className='hidden sm:block signup-button button text-white font-semibold px-6 py-2 rounded-lg active:text-tomato'
          onClick={() => navigate("/registration")}>
          Apply now
        </button>
        <button
          className='sm:hidden button text-white ml-2 w-[25px]'
          onClick={handleMenuClick}>
          <img
            src='/images/icons/menu.svg'
            className='w-full h-full'
            alt='menu'
          />
        </button>
        {open && (
          <div
            className='dropdown-menu bg-[#001D44] p-5 rounded-2xl z-10'
            ref={dropdownRef}>
            <div className='py-2 font-semibold'>
              {header.map((link, i) =>
                link.title === "Contact Us" ? (
                  <Link
                    key={i}
                    className='text-white cursor-pointer'
                    onClick={openModal}>
                    {link.title}
                  </Link>
                ) : (
                  <Link
                    to={link.path}
                    className={
                      location.pathname === link.path
                        ? "text-[#26FFDA]"
                        : "text-white"
                    }
                    onClick={() => setOpen(false)}
                    key={i}>
                    {link.title}
                  </Link>
                )
              )}
            </div>
            <button
              className='block signup-button button text-white font-semibold px-6 py-2 rounded-lg active:text-tomato'
              onClick={() => {
                navigate("/registration");
                setOpen(false);
              }}>
              Apply now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
