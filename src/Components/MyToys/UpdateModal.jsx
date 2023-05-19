import React from "react";
import { useForm } from "react-hook-form";

const UpdateModal = (props) => {
  const {
    register,
    handleSubmit,

  } = useForm();
  const { handleToyUpdate } = props;

  return (
    <div>

      The button to open modal
      <label htmlFor="my-modal-6" className="btn btn-success btn-sm">
        
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-2/3 h-3/4 max-w-5xl bg-teal-400 ">
          <form onSubmit={handleSubmit(handleToyUpdate)}>
            <div className="flex justify-center items-center">
              <h3 className="font-semibold text-xl mr-12">Price:</h3>
              <input
                className="text-input rounded-lg"
                {...register("price")}
                placeholder="Updated price"
                defaultValue={props.toy.price}
              />
            </div>
            <div className="flex justify-center items-center">
              <h3 className="font-semibold text-xl mr-5">Quantity:</h3>
              <input
                className="text-input rounded-lg"
                {...register("Available_quantity")}
                placeholder="Updated quantity"
                defaultValue={props.toy.Available_quantity}
              />
            </div>
            <div className="flex justify-center items-center">
              <h3 className="font-semibold text-xl">Description:</h3>
              <input
                className="text-input rounded-lg"
                {...register("Detail_description")}
                placeholder="Updated description"
                defaultValue={props.toy.Detail_description}
              />
            </div>
          </form>

          <div className="modal-action ">
            <label
              htmlFor="my-modal-6"
              className="btn mx-auto btn-outline font-bold"
            >
              Update this toy
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
