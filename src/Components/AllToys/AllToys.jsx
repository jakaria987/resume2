import { useEffect, useState } from "react";
import AllCategoryToys from "./AllCategoryToys";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://assignment11-server-rho.vercel.app/allToys")
      .then((res) => res.json())
      .then((result) => {
        setToys(result.slice(0,19));
        
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://assignment11-server-rho.vercel.app/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div>
      <div className="search-box p-2 text-center">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="border border-teal-600 px-4 py-3 mr-4 bg-teal-50 rounded-md"
          placeholder="Search by toy name"
        />{" "}
        <button className="btn btn-success btn-md my-8" onClick={handleSearch}>Click here</button>
      </div>
      <h1 className="text-center text-teal-900 text-2xl font-bold">Max Limit : 20</h1>

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
                <td>{toy.price}$</td>
                <td>{toy.Available_quantity} Pcs</td>
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
