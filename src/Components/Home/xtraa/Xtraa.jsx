import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Xtraa.css';
import pic from '../../../assets/aos.jpg'

const Xtraa = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="app bg-teal-100 mx-auto text-center">
        <img className='mx-auto' src={pic} alt="" />
      <h1 data-aos="fade-up">Welcome to our Home Page</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        this section is only for the AOS package
      </p>
      <hr className='border-teal-900 w-2/3 mx-auto' />
    </div>
  );
};

export default Xtraa;
