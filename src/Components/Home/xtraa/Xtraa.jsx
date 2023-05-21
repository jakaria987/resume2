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
        <img data-aos="fade-up" className='mx-auto' src={pic} alt="" />
      <h1 data-aos="fade-up" className='text-teal-900 font-semibold'>Welcome to our Home Page</h1>
      <p data-aos="fade-up" data-aos-delay="200" className='text-teal-900 font-semibold'>
      Webby Foldable Toy. Lorem Ipsum is simply dummy text <br /> of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text.
      </p>
      <hr className='border-teal-900 w-2/3 mx-auto' />
    </div>
  );
};

export default Xtraa;
