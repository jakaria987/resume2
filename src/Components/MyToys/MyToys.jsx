import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import './MyToys.css'

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

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
                <td><img className="imgSize" src={toy.Picture_URL} alt="" /></td>
                <td>{toy.Name}</td>
                <td>{toy.seller_name}</td>
                <td>{toy.price}</td>
                <td>{toy.Available_quantity}</td>
                <td>
                  <button className="btn btn-success btn-sm">Edit</button>
                </td>
                <td>
                  <button className="btn btn-success btn-sm">Delete</button>
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
