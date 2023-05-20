import React from "react";
import  './ExtraSectionOne.css'
import g1 from '../../../assets/e11.jpg'
import g2 from '../../../assets/e12.jpg'
import g3 from '../../../assets/e13.jpg'
import g4 from '../../../assets/e14.jpg'

const ExtraSectionOne = () => {
  return (
    <div className="bg-teal-100 ">
      <hr className="border border-teal-300 mt-2" />
      <h1 className="text-center font-bold text-3xl text-teal-600 mt-4">Features of this shop</h1>
      <div className="card card-compact w-full bg-base-100 shadow-xl mt-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-teal-100">
          
        <div className="card-body">
            <img className="image mx-auto" src={g1} alt="" />
            <div className=" text-center">
          <h2 className="text-xl font-bold">Math toys</h2>
          <p className="font-semibold">In this blog, The Early Teacher will discuss the reasons why maths toys are good for cognitive development and much more.</p>
          </div>
        </div>
        <div className="card-body  ">
        <img className="image mx-auto" src={g2} alt="" />
          <div className=" text-center">
          <h2 className="text-xl font-bold ">Simple Toys</h2>
          <p className="font-semibold">Learn about play and development for the under 5s. The 100 Toys blog is full of fun and free activities to do with your child.</p>
          </div>
        </div>
        <div className="card-body">
        <img className="image mx-auto" src={g3} alt="" />
        <div className=" text-center">
          <h2 className="text-xl font-bold">Language Toys</h2>
          <p className="font-semibold">Encouraging speech and communication from your little can be fun! We selected some of our favourite low-cost toys</p>
          </div>
        </div>
        <div className="card-body">
        <img className="image mx-auto" src={g4} alt="" />
        <div className=" text-center">
          <h2 className="text-xl font-bold">Math Toys</h2>
          <p className="font-semibold">Given below are some math toys suitable for a 5-year-old kid to play and develop learning simultaneously. Magic Sticks</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
