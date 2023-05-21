import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import "./MyToys.css";
import { Link, json } from "react-router-dom";
import UpdateToys from "./UpdateToys";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);



  useEffect(() => {
    fetch(`https://assignment11-server-rho.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    const proceed = confirm('Are you Sure? ');
    if(proceed){
      fetch(`https://assignment11-server-rho.vercel.app/myToys/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          alert('Deleted Successfully');
          const remaining = toys.filter(toy => toy._id !== id);
          setToys(remaining);
        }
      })
    }
  }

  const handleUpdate = (data) => {
    console.log(data);
    fetch(`https://assignment11-server-rho.vercel.app/myToys/${data.id}`, {
      method :"PATCH",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){

        // const remaining = toys.filter(toy => toy._id !== data.id);
        // const updated = toys.find(toy => toy._id === data.id);
        // updated.price = 'updated';
        // updated.price = data.price;
        // const newToy = [updated, ...remaining];
        // setToys(newToy);

        alert('Updated successfully please reload the browser to see the updates');
      }
    })
  }

  return (
    <div>
      <h1 className="text-center font-bold text-teal-900 text-3xl mt-6">
        My Toys
      </h1>

      <div className="overflow-x-auto ">
        <table className="table table-compact w-full ">
          <thead>
            <tr>
              <th>SL</th>
              <th>Toy Pic</th>
              <th>Toy name</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <img className="imgSize" src={toy.Picture_URL} alt="" />
                </td>
                <td>{toy.Name}</td>
                <td>{toy.seller_name}</td>
                <td>{toy.price}$</td>
                <td>{toy.Available_quantity} Psc</td>
                <td>  
                  <button 
                  > 
                  <UpdateToys 
                  key={toy._id}
                  toy={toy}
                  handleUpdate={handleUpdate}
                  ></UpdateToys>
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(toy._id)} className="btn btn-square btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
