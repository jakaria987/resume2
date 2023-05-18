

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

  return (
    <div className="hero min-h-screen bg-teal-100">
      <div className="hero-content w-1/2 py-10">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body bg-teal-400 rounded-lg">
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
                  placeholder="Enter your password"
                  className="input input-bordered"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
