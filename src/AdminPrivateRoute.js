import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Routes, Route, Swit } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import { Navigate, Outlet, useLocation ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
{/*  function AdminPrivateRoute({ ...rest }) {

    return (

       

            <Routes>

                <Route {...rest}
                    render={({ props, location }) =>
                        localStorage.getItem('auth_token') ?
                            (<MasterLayout  {...props} />) :
                            (<Navigate to={{ pathname: '/login', state: { from: location } }} />)



                    }
                />
    
            </Routes>

       
    );
}*/}


function AdminPrivateRoute() {

    const navigate = useNavigate();

    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('/api/checkingAuthenticated').then(res => {
            if (res.status === 200) {
                setAuthenticated(true);
            }
            setLoading(false);
        });

        return () => {
            setAuthenticated(false);
        };
    }, []);

    const location = useLocation();


    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if (err.response.status === 401) {
            swal('Unauthenticated',err.response.data.message,"warning");
            navigate('/');
        }
        return Promise.reject(err);
    });

    if (loading) {
        return <h1>Loading ...</h1>
    }




    return Authenticated
        ? <Outlet /> // <-- nested routes rendered here
        : <Navigate to="/login" replace state={{ from: location }} />;
}

export default AdminPrivateRoute;
