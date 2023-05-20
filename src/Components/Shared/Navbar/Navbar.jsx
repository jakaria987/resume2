import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const navItems = (
    <>
      <li className="font-bold text-xl">
        <Link to="/">Home</Link>
      </li>

      <li className="font-bold text-xl">
        <Link to="/allToys">All Toys</Link>
      </li>
      <li className="font-bold text-xl">
        <Link to="/myToys">My Toys</Link>
      </li>
      <li className="font-bold text-xl">
        <Link to="/addToys">Add A Toy</Link>
      </li>
      <li className="font-bold text-xl">
        <Link to="/blogs">Blogs</Link>
      </li>
    </>
  );
  const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => console.log(error));
    }
  return (
    <div className="navbar bg-teal-500 mt-4 py-4 h-24 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img className="logo" src={logo} alt="" />
          <a className="text-3xl font-bold ml-4 text-teal-950 " href="#">
            The ToyToy Shop
          </a>
        </Link>
      </div>
      <div className="navbar-center ml-32 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
      {user ? (
                  <button className="lBtn" onClick={handleLogOut} variant="dark">Logout</button>
                ) : (
                  <Link to="/login">
                    <button className="lBtn" variant="dark">Login</button>
                  </Link>
                )}
      </div>
    </div>
  );
};

export default Navbar;
