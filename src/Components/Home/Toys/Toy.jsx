import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({toy}) => {
    const {Picture_URL, Name, price, Rating} = toy || {};
    return (
        <div className="card  bg-teal-200 shadow-xl mx-auto my-4 w-1/4">
        <figure className="px-10 pt-10">
          <img
            src={Picture_URL}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title text-3xl font-bold text-teal-900">{Name}</h2>
          <p className="text-xl font-bold text-teal-900">{price}$</p>
          <p className="text-xl font-bold text-teal-900">Rating: {Rating}</p>
          <Link className='mt-4' to={`/toyDetails/${toy._id}`}>
                    <button className="btn btn-success btn-md">
                      View Details
                    </button>
            </Link>
        </div>
      </div>
      );
};

export default Toy;