import React, { useState, useRef } from "react";
import DatePicker from "react-date-picker";
import { toast } from "react-toastify";
import countries from "../countries";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const country_names = countries.map((country) => country.name);
const genders = ["Male", "Female"];
const programs = [
  "Cybersecurity Engineer",
  "Cybersecurity SOC Analyst",
  "AWS Cloud Engineer",
  "Azure Cloud Engineer",
  "Academic & Professional Internship",
];
const dates = ["October 2025", "April 2026", "October 2026", "April 2027"];
const payment_methods = ["Mobile Money", "Pay Later", "Internship Application"];

const Apply = () => {
  const [validation, setValidation] = useState({
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    birth: true,
    address: true,
    gender: true,
    country: true,
    program: true,
    date: true,
    paymentMethod: true,
  });
  const [birthDate, setBirthDate] = useState("");
  const [isLoading, setLoading] = useState(false);

  const setFirstNameValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, firstName: isValid }));
  };

  const setLastNameValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, lastName: isValid }));
  };

  const setEmailValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, email: isValid }));
  };

  const setPhoneValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, phone: isValid }));
  };

  const setAddressValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, address: isValid }));
  };

  const setGenderValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, gender: isValid }));
  };

  const setCountryValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, country: isValid }));
  };

  const setProgramValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, program: isValid }));
  };

  const setBirthDateValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, birth: isValid }));
  };

  const setPaymentMethodValidation = (isValid) => {
    setValidation((prev) => ({ ...prev, paymentMethod: isValid }));
  };

  const handleDateChange = (newDate) => {
    if (newDate) {
      const formattedDate = newDate.toISOString().slice(0, 10);
      setBirthDate(formattedDate);
      console.log("Selected Date:", formattedDate);
    }
  };

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const genderRef = useRef();
  const countryRef = useRef();
  const programRef = useRef();
  const dateRef = useRef();
  const paymentMethodRef = useRef();

  const firstNameRegex = /^[A-Za-z\s]+$/;
  const lastNameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^(?:\+?[\d\s()]*[\d]|[\d][\d\s()]*[\d])$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (ref, setValidationFunc) => {
    setValidationFunc(ref.current.value.length > 0);
  };

  const validateInfo = () => {
    setFirstNameValidation(firstNameRegex.test(firstNameRef.current.value));
    setLastNameValidation(lastNameRegex.test(lastNameRef.current.value));
    setEmailValidation(emailRegex.test(emailRef.current.value));
    setPhoneValidation(phoneRegex.test(phoneRef.current.value));
    validateField(addressRef, setAddressValidation);
    validateField(genderRef, setGenderValidation);
    validateField(countryRef, setCountryValidation);
    validateField(programRef, setProgramValidation);
    if (birthDate) setBirthDateValidation(true);
    else setBirthDateValidation(false);
    validateField(paymentMethodRef, setPaymentMethodValidation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    const gender = genderRef.current.value;
    const country = countryRef.current.value;
    const program = programRef.current.value;
    const date = dateRef.current.value;
    const payment_method = paymentMethodRef.current.value;

    let flag = true;
    if (!firstNameRegex.test(firstNameRef.current.value)) flag = false;
    if (!lastNameRegex.test(lastNameRef.current.value)) flag = false;
    if (!emailRegex.test(emailRef.current.value)) flag = false;
    if (!phoneRegex.test(phoneRef.current.value)) flag = false;
    if (!birthDate) flag = false;
    if (!address) flag = false;
    if (!gender) flag = false;
    if (!country) flag = false;
    if (!program) flag = false;
    if (!date) flag = false;
    if (!payment_method) flag = false;

    validateInfo();

    if (flag) {
      const applyData = {
        firstName,
        lastName,
        email,
        phone,
        birth: birthDate,
        address,
        gender,
        country,
        program,
        date,
        payment_method,
      };

      setLoading(true);
      fetch("https://dobretech-server-9377d560ca1c.herokuapp.com/send_emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applyData),
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("Sorry, Something went wrong. Please try again later.");
            throw new Error("Error!");
          }
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          if (payment_method === "Mobile Money") {
            toast.success("You are successfully applied.");
            // setTimeout(() => window.location.href = 'http://64.23.179.182/send-money', 500);
            setTimeout(
              () => (window.location.href = "https://pay.dobretech.com/"),
              500
            );
          } else
            toast.success(
              "You are successfully applied. Please pay with Mobile Money or Bank Transfer Follwoing the Confirmation Email. For Internship foward all relevent CV, Certificates and Academic Letter to info@dobretech.com."
            );
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Sorry, Something went wrong. Please try again later.");
          console.error("Error: ", err);
        });

      // console.log('Application sent!', applyData);
    } else if (
      flag &&
      (payment_method === "Paypal" || payment_method === "Stripe")
    ) {
      toast.warning("Paypal or Stripe are not supported yet.");
    } else {
      // Alert or push notification
      console.log("Please fill all fields.");
      return;
    }
  };

  return (
    <>
      <h1 className='text-primary text-center text-5xl font-semibold p-2 mt-12'>
        Apply Now
      </h1>
      <p className='text-secondary text-center text-xl py-1'>
        Don't be late, apply with us today!
      </p>
      <div className='flex flex-wrap justify-center items-center gap-10 p-10 mb-10'>
        <form className='flex flex-col sm:gap-5 w-[600px] apply-form'>
          <div className='sm:flex flex-wrap justify-center sm:justify-between'>
            <TextInputElement
              type='text'
              name='first name'
              placeholder='First Name'
              isValid={validation.firstName}
              elementRef={firstNameRef}
            />
            <TextInputElement
              type='text'
              name='last name'
              placeholder='Last Name'
              isValid={validation.lastName}
              elementRef={lastNameRef}
            />
          </div>
          <div className='sm:flex flex-wrap justify-center sm:justify-between'>
            <TextInputElement
              type='email'
              name='email address'
              placeholder='Email'
              isValid={validation.email}
              elementRef={emailRef}
              required
            />
            <TextInputElement
              type='text'
              name='phone number'
              placeholder='Phone'
              isValid={validation.phone}
              elementRef={phoneRef}
            />
          </div>
          <div className='sm:flex flex-wrap justify-center sm:justify-between'>
            <div>
              <div className='text-secondary text-sm px-4 pt-1'>
                Birth of Date
              </div>
              <div className='apply-form-input text-black sm:w-[280px] rounded-md pl-3 py-3'>
                <DatePicker onChange={handleDateChange} value={birthDate} />
              </div>
              {!validation.birth && (
                <div className='text-red-500 text-sm px-4 pt-1'>
                  This field is required!
                </div>
              )}
            </div>
            <div className='mt-5'>
              <TextInputElement
                type='text'
                placeholder='Address'
                isValid={validation.address}
                elementRef={addressRef}
              />
            </div>
          </div>
          <div className='sm:flex flex-wrap justify-center sm:justify-between'>
            <SelectElement
              values={genders}
              placeholder='Gender'
              elementRef={genderRef}
              isValid={validation.gender}
              width={"280px"}
            />
            <SelectElement
              values={country_names}
              placeholder='Select Country'
              isValid={validation.country}
              elementRef={countryRef}
              width={"280px"}
            />
          </div>
          <div>
            <SelectElement
              values={programs}
              placeholder='Select Program'
              elementRef={programRef}
              isValid={validation.program}
              width={"100%"}
            />
          </div>
          <div>
            <SelectElement
              values={dates}
              elementRef={dateRef}
              isValid={validation.date}
              width={"100%"}
            />
          </div>
          {/* <div className="apply-form-input px-5 py-2 rounded-md text-black">
                        Payment Method: Mobile Money
                    </div> */}
          <div>
            <SelectElement
              values={payment_methods}
              placeholder='Select Registration Fee Payment Method'
              elementRef={paymentMethodRef}
              isValid={validation.paymentMethod}
              width={"100%"}
            />
          </div>
          <div className='mt-8 self-center'>
            <button
              className='bg-primary relative text-white font-semibold rounded-md px-20 py-2 active:text-tomato'
              onClick={(e) => handleSubmit(e)}>
              Apply
              {isLoading && (
                <div class='loader inline-block absolute ml-2 mt-[2px]'></div>
              )}
            </button>
          </div>
        </form>
        <div className='max-w-[480px]'>
          <div className=''>
            <h3 className='text-primary text-4xl font-semibold py-8'>
              Enroll Now
            </h3>
            <p className='text-secondary leading-8'>
              Apply Now and pay registration Fee (10,000frs) to be enrolled You
              will receive an email confirmation and next steps to pay the
              program fees 700,000frs local and 1,000,000frs International
              Students
            </p>
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-2'>
            <div className='w-[200px] py-6'>
              <img
                src='/images/icons/apply_ub.svg'
                alt='UB IT'
                className='mx-auto'
              />
              <h5 className='text-primary text-center font-semibold mt-8'>
                UB IT Career Training
              </h5>
              <p className='text-secondary text-center'>
                This training is done in partnership with the University of
                Buea.
              </p>
            </div>
            <div className='w-[240px] py-6'>
              <img
                src='/images/icons/apply_certification.svg'
                alt='Certification'
                className='mx-auto'
              />
              <h5 className='text-primary text-center font-semibold mt-8'>
                Certification Training
              </h5>
              <p className='text-secondary text-center'>
                Gain mastering and proficiency
              </p>
            </div>
          </div>
          {/* <div className="text-center mt-6">
                        <button className="bg-tomato text-white mx-auto px-10 py-2 rounded-md active:text-primary" onClick={() => {}}>Download Admission Steps</button>
                    </div> */}
          <div className='text-center mt-6'>
            {/* <Link to='/DobreTech Programs.pdf' target="__BLANK" className="text-primary mx-auto px-10 py-1 rounded-md hover:text-tomato hover:border-tomato border border-primary">Programs Overview</Link> */}
            <a
              href='/DobreTech New Programs.pdf'
              download='DobreTech New Programs.pdf'>
              <button className='bg-tomato text-white mx-auto px-12 py-2 rounded-md active:text-primary'>
                Download Programs Overview
              </button>
            </a>
          </div>
          <div className='text-center mt-6'>
            {/* <Link to='/DobreTech Programs.pdf' target="__BLANK" className="text-primary mx-auto px-10 py-1 rounded-md hover:text-tomato hover:border-tomato border border-primary">Programs Overview</Link> */}
            <a
              href='/UB-DobreTech-IT Career Training Admission Steps Oct 2024.pdf'
              download='UB-DobreTech-IT Career Training Admission Steps Oct 2024.pdf'>
              <button className='text-primary mx-auto px-2 py-[6px] border-2 rounded-md border-primary hover:text-tomato hover:border-tomato'>
                Download Admission Steps and Process
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const TextInputElement = ({
  type,
  name = "",
  elementRef,
  placeholder,
  isValid,
}) => {
  let validationText = "This field is required!";
  if (
    name === "email address" ||
    name === "first name" ||
    name === "last name" ||
    name === "phone number"
  )
    validationText = `Please enter valid ${name}.`;
  return (
    <div className='py-2'>
      <div className='apply-form-input sm:w-[280px] rounded-md'>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={elementRef}
          className='w-full h-12 outline-none text-black px-4 rounded-md'
        />
      </div>
      {!isValid && (
        <div className='text-red-500 text-sm px-4 pt-1'>{validationText}</div>
      )}
    </div>
  );
};

const SelectElement = ({ values, placeholder, isValid, elementRef, width }) => {
  return (
    <div className='py-2'>
      <div className={`apply-form-input sm:w-[${width}] rounded-md`}>
        <select
          placeholder='Gender'
          ref={elementRef}
          className=' text-black outline-none w-full h-12 px-4 rounded-md'
          defaultValue={""}>
          {placeholder && (
            <option value='' disabled className='text-secondary'>
              {placeholder}
            </option>
          )}
          {values.map((value, i) => (
            <option value={value} key={i}>
              {value}
            </option>
          ))}
        </select>
      </div>
      {!isValid && (
        <div className='text-red-500 text-sm px-4 pt-1'>
          This field is required!
        </div>
      )}
    </div>
  );
};

export default Apply;
