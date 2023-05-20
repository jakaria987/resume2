import React, {  useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { AuthContext } from "../../Providers/AuthProviders";
import { set } from "react-hook-form";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setError(loggedUser);
            navigate(from, {replace:true})
        })
        .catch(error => {
            setError("something doing wrong");
        })
    }
    const [ok, setOk] = useState('');
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setOk("Successfully Login by google")
      })
      .catch(error => {
        setError("something wrong");
      })
    }
  return (
    <div className="hero min-h-screen bg-teal-100">
      <div className="hero-content w-1/2 py-10">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body bg-teal-400 rounded-lg">
            <h4 className="text-teal-600">{ok}</h4>
            <h4 className="text-teal-600">{error}</h4>

            <h1 className="text-4xl text-center mb-8 font-bold text-teal-900">
              Please Login here
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-teal-900">Email : </span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
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
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <button className="btn bg-teal-700 btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                  Login
                </button>
              </div>
            </form>
            <p className="mt-5 text-center">
              Are you new in here ?{" "}
              <Link to="/signUp">
                <button className="btn bg-teal-700 btn-xs md:btn-md ">
                  Sign Up
                </button>
              </Link>{" "}
            </p>
            <button onClick={handleGoogleSignIn} className="mt-4 btn-success">SIgn in with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
