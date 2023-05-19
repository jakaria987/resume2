import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
    const [ok, setOk] = useState('');
    const [error, setError] = useState("");


  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo, email, password);
    createUser(email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setOk("registration Successful");

    })
    .catch(error => {
        setError("something doing wrong");
    })
  };

  return (
    <div className="hero min-h-screen bg-teal-100">
      <div className="hero-content w-1/2 py-10">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body bg-teal-400 rounded-lg">
            <h1 className="text-4xl text-center mb-8 font-bold text-teal-900">
              Please Sign Up
            </h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-900">Name : </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-900">Email : </span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-900">Password : </span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6 ">
                <button className="btn bg-teal-700 btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-5 text-center">
              Already have an account ?
              <Link to="/login">
                <button className="btn bg-teal-700 btn-xs md:btn-md ml-4">
                  Log In
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
