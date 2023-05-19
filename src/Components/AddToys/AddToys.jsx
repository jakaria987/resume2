import { useForm } from "react-hook-form";
import './AddToys.css'

const AddToys = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch('http://localhost:5000/postToys',
    {
        method: 'POST',
        headers: {
            "content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
    })
  };

  return (
    <div>
        <h1 className="text-3xl text-center font-bold text-teal-900" >Do you want to add a toy? </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="text-input"
          {...register("Picture_URL")}
          placeholder="Picture URL"
          //   defaultValue="Picture URL"
        />
        <input
          className="text-input"
          {...register("Name")}
          placeholder="Name"
          //   defaultValue="Name"
        />
        <input
          className="text-input"
          {...register("seller_name")}
          placeholder="seller name"
          //   defaultValue="seller name"
        />
        <input
          className="text-input"
          {...register("seller_email")}
          placeholder="seller email"
          //   defaultValue="seller email"
        /><br />

        <select className="text-input" {...register("sub_category")}>
          <option value="Engineering">Math Toys</option>
          <option value="Editor">Language Toys</option>
          <option value="writer">Science Toys</option>
        </select>
        <input
          className="text-input"
          {...register("price")}
          placeholder="price"
          //   defaultValue="seller email"
        />
        <input
          className="text-input"
          {...register("Rating")}
          placeholder="Rating"
          //   defaultValue="seller email"
        />
        <input
          className="text-input"
          {...register("Available_quantity")}
          placeholder="Available quantity"
          //   defaultValue="seller email"
        /><br />
        <input
          className="text-input"
          {...register("Detail_description")}
          placeholder="Detail description"
          //   defaultValue="seller email"
        />
        <br />

        <button className="extra btn btn-success"><input  type="submit" value={"Add a toy"} /></button>
      </form>
    </div>
  );
};

export default AddToys;