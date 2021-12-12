import React from 'react';
//import  '../../assets/admin/css/styles.css';
//import '../../assets/admin/js/scripts';
import { Navigate } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Routes, Route, Swit, Outlet } from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import routes from '../../routes/routes'


const MasterLayout = () => {

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">

                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">

                    <main >
                        <Outlet />
                        <Routes>

                            {routes.filter(route => route.component)
                                .map(({ path, component: Component }, idx) => (
                                    <Route
                                        key={idx}
                                        path={path}
                                        element={<Component />}
                                    />
                                ))}
                            <Route
                                path="/admin"
                                element={<Navigate to="/admin/dashboard" />}
                            />
                        </Routes>

                    </main>

                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default MasterLayout;