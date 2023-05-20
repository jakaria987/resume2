import React from "react";
import backgroundImage  from '../../../assets/e21.jpg'

const ExtraSectionTwo = () => {
  return (
    <div className="bg-teal-100 ">
        <hr className="border border-teal-300 mt-2" />
      <div
        className="hero min-h-screen mt-16 "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          <div className="max-w-sm">
            <h1 className="mb-5 text-3xl font-bold  ">Explore Our Collection</h1>
            <p className="mb-5 font-bold">
            Step into our shop and explore our vast collection of toys. From classic board games to interactive robots, we have the latest trends and timeless favorites.
            </p>
          </div>
          <div className="max-w-sm">
            <h1 className="mb-5 text-3xl font-bold">Visit Us Today</h1>
            <p className="mb-5 font-bold">
            Come visit our toy shop today and let the magic of play inspire you. We can't wait to see the smiles on the faces of children and parents alike.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
