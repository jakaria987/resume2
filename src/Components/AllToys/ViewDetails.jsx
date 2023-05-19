import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  // const { id } = useParams();
  // console.log(id);
  // const [toyDetails, setToyDetails] = useState({});

  // useEffect(() => {
  //     fetch(`http://localhost:5000/toyDetails/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setToyDetails(data))
  //       .catch((error) => console.error(error))
  //   }, [id]);

  const toyDetails = useLoaderData();
  const { Name,Picture_URL,seller_name,seller_email,price,Rating,Available_quantity,Detail_description } = toyDetails;

  return (
    <div>
      <div className="card  bg-teal-200 shadow-xl mx-auto my-4 w-1/2">
        <figure className="px-10 pt-10">
          <img
            src={Picture_URL}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center ">
          <h2 className="card-title text-3xl font-bold text-teal-900">{Name}</h2>
          <p className="text-xl font-bold text-teal-900">Seller name: {seller_name}</p>
          <p className="text-xl font-bold text-teal-900">Seller email: {seller_email}</p>
          <p className="text-xl font-bold text-teal-900">{price}$</p>
          <p className="text-xl font-bold text-teal-900">Rating: {Rating}</p>
          <p className="text-xl font-bold text-teal-900">Available_quantity: {Available_quantity}</p>
          <p className="text-xl font-bold text-teal-900">{Detail_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
