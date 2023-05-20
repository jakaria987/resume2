import React from "react";

const UpdateToys = ({toy, handleUpdate}) => {
    const {price, Available_quantity,Detail_description, _id} = toy
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-5" className="btn">
        Edit
        
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
            <button onClick={()=> handleUpdate(_id)}>
          update it
        </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
