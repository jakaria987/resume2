import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const UpdateToys = ({toy, handleUpdate}) => {
    const {price, Available_quantity,Detail_description, _id} = toy
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    // const loadData = useLoaderData();

    const onSubmit = (data) => {
      console.log(data);
      handleUpdate({
        id:_id,
        ...data
      })
    }

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor={`my-modal-${_id}`} className="btn">
        {/* <button onClick={()=> {handleUpdate(_id)}}> */}
          Edit it
        {/* </button> */}
        
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">

        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="text-input"
          {...register("price")}
          placeholder="price"
            defaultValue={price}
        /> 
        <input
          className="text-input"
          {...register("Available_quantity")}
          placeholder="Available quantity"
          //   defaultValue="seller email"
        /> 
        <input
          className="text-input"
          {...register("Detail_description")}
          placeholder="Detail description"
          //   defaultValue="seller email"
        />
        <br />
          <button className="btn btn-success btn-lg my-4" type="submit">Update</button>
        
          <div className="">
            <label  htmlFor={`my-modal-${_id}`} className="btn btn-success">
              close
            </label>
          </div>
          </form> 
        </div>
      </div>
    </div>
  );
};

export default UpdateToys;
