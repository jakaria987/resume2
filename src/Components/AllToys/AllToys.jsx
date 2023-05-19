import { useEffect, useState } from "react";
import AllCategoryToys from "./AllCategoryToys";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="search-box p-2 text-center">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="p-1"
        />{" "}
        <button>Search</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Seller Name</th>
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
                    <button className="btn btn-success btn-md">
                      View Details
                    </button>
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
