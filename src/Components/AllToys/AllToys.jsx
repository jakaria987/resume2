import { useEffect, useState } from "react";
import AllCategoryToys from "./AllCategoryToys";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  return (
    <div>
      okkkkkkkk
      
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            {/* head */}
            <thead>
              <tr>
                {/* <th></th> */}
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {toys.map((toy) => (
              <tr>
                {/* <th>1</th> */}
                <td>{toy.seller_name}</td>
                <td>{toy.Name}</td>
                <td>{toy.sub_category}</td>
                <td>{toy.price}</td>
                <td>{toy.Available_quantity}</td>
                <td>
                  <Link to={`/toyDetails/${toy._id}`}>
                    <button className="btn btn-success">View Details</button>
                  </Link>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default AllToys;
