import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if(loading){
      return <div className='text-center'><button className="btn loading btn-success my-4 ">loading</button></div>
    }
    if (user) {
      return children;
    }
  
    return <Navigate state={{from : location}}  to="/login" replace></Navigate>;
  };

export default PrivateRoute;