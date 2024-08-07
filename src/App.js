import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterLayout from '../src/layouts/admin/MasterLayout'

import { Navigate } from 'react-router-dom';

import Page403 from '../src/components/errors/Page403';
import Page404 from '../src/components/errors/Page404';

import Login from './components/frontend/frontend/Auth/Login';
import Register from './components/frontend/frontend/Auth/Register';

import styled from 'styled-components';



import AdminPrivateRoute from './AdminPrivateRoute';
import routes from '../src/routes/routes';
import FrontendLayout from './layouts/frontend/FrontendLayout';
import publicRoutesList from '../src/routes/Publicroutelist'

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config;
}
)


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>


          <Route path="/403" element={<Page403 />} />
          <Route path="/404" element={<Page404 />} />


          <Route path="/404" element={<Page404 />} />



          {/*      <Route {...rest } render={ (props) => <FrontendLayout {...props} /> } /> */}

          <Route element={<FrontendLayout />} >
            <Route path="/" element={<FrontendLayout />} >
              {publicRoutesList.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>



          {/*
                  <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />



         <Route  path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />}/>   */}

          {/*  <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />  */}

          <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Login />} >

          </Route>

          <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Register />} >

          </Route>

          {/*   

            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/profile" element={<Profile />} />

Admin estaba dentro de los route

            </Route> */}
          <Route element={<AdminPrivateRoute />} >
            <Route path="/admin" element={<MasterLayout />} >
              {routes.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Route>



          </Route>






        </Routes>

      </Router>

    </div>
  );
}

export default App;
