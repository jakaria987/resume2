import React from 'react';

const Toy = ({toy}) => {
    const {Picture_URL, Name, price, Rating} = toy || {};
    return (
        <div className="col-md-12 col-sm-12 col-lg-6 ">
          <div className="row d-flex justify-content-center align-items-center single-card">
            <div className="col-md-4">
              <img
                className="w-100"
                src={Picture_URL}
                alt=""
              />
            </div>
            <div className="col-md-8 card-right">
              <h2>{Name }</h2>
              <p>{price}</p>
              <p>{Rating}</p>
              {/* <div className="text-end">
                <button>
                  Apply 
                </button>
              </div> */}
            </div>
          </div>
        </div>
      );
};

export default Toy;