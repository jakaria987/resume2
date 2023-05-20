import React from "react";
import  './ExtraSectionOne.css'
import g1 from '../../../assets/e11.jpg'
import g2 from '../../../assets/e12.jpg'
import g3 from '../../../assets/e13.jpg'
import g4 from '../../../assets/e14.jpg'

const ExtraSectionOne = () => {
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card-body">
            <img className="image mx-auto" src={g1} alt="" />
            <div className=" text-center">
          <h2 className="text-xl font-bold">Shoes!</h2>
          <p className="font-semibold">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card-body ">
        <img className="image mx-auto" src={g2} alt="" />
          <div className=" text-center">
          <h2 className="text-xl font-bold ">Shoes!</h2>
          <p className="font-semibold">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card-body">
        <img className="image mx-auto" src={g3} alt="" />
        <div className=" text-center">
          <h2 className="text-xl font-bold">Shoes!</h2>
          <p className="font-semibold">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card-body">
        <img className="image mx-auto" src={g4} alt="" />
        <div className=" text-center">
          <h2 className="text-xl font-bold">Shoes!</h2>
          <p className="font-semibold">If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
