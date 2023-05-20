import React from 'react';
import err from '../../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto mt-4' src={err}alt="" />
        </div>
    );
};

export default ErrorPage;