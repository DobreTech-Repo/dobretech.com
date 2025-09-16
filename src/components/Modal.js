import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [isLoading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setLoading(true);
        // You can add further logic here (e.g., API calls)
        fetch('https://dobretech-server-9377d560ca1c.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if(!response.ok) {
                    throw new Error('Error!');
                }
                return response.json();
            })
            .then(data => {
                setLoading(false);
                toast.success("Your message is successfully sent.");
                onClose();
            })
            .catch(err => {
                setLoading(false);
                toast.error("Sorry, Something went wrong. Please try again later.");
                console.error("Error: ", err);
            });
    };

    if (!isOpen) return null; // Don't render the modal if it's not open

    const handleClose = (e) => {
        // Close the modal if the backdrop is clicked
        if (e.target.className === 'modal-backdrop') {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleClose}>
            <div className="modal-content w-[350px] sm:w-[500px] md:w-[700px] relative" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times; {/* Cross button */}
                </button>
                <form onSubmit={handleSubmit} className='mt-5'>
                    <div className='flex justify-center gap-[3%]'>
                        <div className='w-[30%]'>
                            <img src='/images/icons/modal_address.svg' alt='address icon' className='mx-auto w-[30%]' />
                            <h6 className='text-sm sm:text-2xl text-primary text-center font-semibold'>Address</h6>
                            <p className='text-[10px] sm:text-[12px] text-secondary text-center'>University of Buea - IT Center, Main Campus Molyko Buea - Cameroon.</p>
                        </div>
                        <div className='w-[30%]'>
                            <img src='/images/icons/modal_email.svg' alt='address icon' className='mx-auto w-[30%]' />
                            <h6 className='text-sm sm:text-2xl text-primary text-center font-semibold'>Email Address</h6>
                            <p className='text-[10px] sm:text-[12px] text-secondary text-center'>info@dobretech.com</p>
                        </div>
                        <div className='w-[30%]'>
                            <img src='/images/icons/modal_phone.svg' alt='address icon' className='mx-auto w-[30%]' />
                            <h6 className='text-sm sm:text-2xl text-primary text-center font-semibold'>Contact</h6>
                            <p className='text-[10px] sm:text-[12px] text-secondary text-center'>+237 671163568 / 682498299 / 696948590</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='border rounded-md py-1 pl-2 mt-5 w-[48%]'>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder='Name*'
                                onChange={handleChange}
                                className='w-full outline-none text-black h-8'
                                required
                            />
                        </div>
                        <div className='border rounded-md py-1 pl-2 mt-5 w-[48%]'>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                placeholder='Phone*'
                                onChange={handleChange}
                                className='w-full outline-none text-black h-8'
                                required
                            />
                        </div>
                    </div>
                    <div className='border rounded-md py-1 pl-2 mt-5 w-full'>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder='Email*'
                            onChange={handleChange}
                            className='w-full outline-none text-black h-8'
                            required
                        />
                    </div>
                    <div className='border rounded-md py-1 pl-2 mt-5 w-full'>
                        <textarea
                            name="message"
                            placeholder='Message*'
                            value={formData.message}
                            className='w-full outline-none text-black h-32'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='text-center mt-8'>
                        <button type="submit" className='bg-tomato relative text-white px-12 py-1 rounded-md'>
                            <span>SUBMIT</span>
                            {isLoading && <div className="loader inline-block absolute ml-2 mt-[1px]"></div>}
                        </button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;