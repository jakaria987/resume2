import React from "react";
import { Link } from "react-router-dom";

const AllCategoryToys = ({ toy }) => {
  return (
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
          <tr>
            {/* <th>1</th> */}
            <td>{toy.seller_name}</td>
            <td>{toy.Name}</td>
            <td>{toy.sub_category}</td>
            <td>{toy.price}</td>
            <td>{toy.Available_quantity}</td>
            <td>
              <Link to='toyDetails'>
                <button className="btn btn-success">View Details</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllCategoryToys;
