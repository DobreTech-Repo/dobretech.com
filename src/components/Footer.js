import React from 'react';
import {Link} from 'react-router-dom';
import {footer} from '../static_content';

const Footer = () => {
    return (
        <footer className='footer px-5 xl:px-20 py-5 text-white'>
            <div className='px-5 pt-20 pb-10'>
                <div className='text-center text-white text-xl sm:text-3xl font-bold py-4'>
                    Partners, Accreditations, Recognitions and Endorsements
                </div>
                <div className='flex flex-wrap gap-3 justify-center py-5'>
                    {
                        footer.partners.map((partner, i) => (
                            <Link to={partner.link} target='_BLANK' key={i}>
                                <img src={`/images/${partner.logo}`} alt={partner.name} className='w-[170px] h-[82px]' />
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col lg:flex-row mb-5'>
                <div className='order-2 flex justify-center items-center gap-5 w-auto lg:w-[335px] mx-auto lg:order-1 lg:block p-5 text-justify'>
                    <div className='w-[100px]'>
                        <img src='/images/footer_logo.png' alt='Footer Logo' />
                    </div>
                    <div className='text-gray-300 w-[180px] sm:w-[300px]'>
                        {footer.footer_introduction}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between order-1 lg:order-2 px-5 flex-grow'>
                    <div className='mx-auto'>
                        <h3 className='text-2xl font-semibold py-5'>Important links</h3>
                        <div>
                            {footer.important_links.map((link, i) =>
                                <div className='text-center sm:text-left' key={i}>
                                    <Link to={link.path} className='block py-2 hover:text-tomato'>
                                        {link.title}
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className='gap-2 py-5 hidden sm:flex'>
                            <Link to='https://web.facebook.com/people/Dobre-Technologies/100067183329468/' target='_BLANK'>
                                <img src='/images/icons/facebook.svg' alt='Facebook' />
                            </Link>
                            <Link to='https://twitter.com/DobreTechnolog1/' target='_BLANK'>
                                <img src='/images/icons/twitter.svg' alt='X' />
                            </Link>
                            <Link to='https://linkedin.com/company/dobretech/' target='_BLANK'>
                                <img src='/images/icons/linkedin.svg' alt='LinkedIn' />
                            </Link>
                            <Link to='https://www.instagram.com/dobretech/' target='_BLANK'>
                                <img src='/images/icons/instagram.svg' alt='Instagram' />
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-[300px] sm:w-[370px] mx-auto'>
                        <h3 className='text-2xl font-semibold py-5 text-center sm:text-left'>Information</h3>
                        <div className='text-base py-2 text-center sm:text-left'>{footer.information.address}</div>
                        <div className='px-1 py-2'>
                            {footer.information.phone_numbers.map((phone_number, i) => (
                                <div className='py-2 text-center sm:text-left' key={i}>{phone_number}</div>
                            ))}
                        </div>
                        <div className='text-center sm:text-left'>{footer.information.email_address}</div>
                        {/* <div className='pt-6 flex'>
                            <input type='email' 
                              className='border border-[#26FFDA] rounded-tl-sm rounded-bl-sm bg-[#3395a6] outline-none pl-4 py-3 text-xs placeholder:text-white w-[200px]'
                              placeholder='Enter email address*'
                            />
                            <button className='bg-[#26FFDA] text-primary font-bold w-[100px] rounded-tr-sm rounded-br-sm active:text-tomato'>Subscribe</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='gap-2 py-5 flex justify-center sm:hidden'>
                <Link to='https://web.facebook.com/people/Dobre-Technologies/100067183329468/' target='_BLANK'>
                    <img src='/images/icons/facebook.svg' alt='Facebook' />
                </Link>
                <Link to='https://twitter.com/DobreTechnolog1/' target='_BLANK'>
                    <img src='/images/icons/twitter.svg' alt='X' />
                </Link>
                <Link to='https://linkedin.com/company/dobretech/' target='_BLANK'>
                    <img src='/images/icons/linkedin.svg' alt='LinkedIn' />
                </Link>
                <Link to='https://www.instagram.com/dobretech/' target='_BLANK'>
                    <img src='/images/icons/instagram.svg' alt='Instagram' />
                </Link>
            </div>
            <div className='flex flex-col sm:flex-row justify-between py-3 border-t border-gray-300'>
                <div className='text-gray-300 font-xl pb-2'>&copy;Copyright DobreTech 2024.</div>
                {/* <div>
                    <Link to='privacypolicy' className='text-white mr-2 hover:text-tomato sm:mr-5'>Privacy Policy</Link>
                    <Link to='termsandconditions' className='text-white hover:text-tomato'>Terms & Conditions</Link>
                </div> */}
            </div>
        </footer>
    );
}

export default Footer;
