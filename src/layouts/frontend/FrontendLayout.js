import React from 'react';
//import  '../../assets/admin/css/styles.css';
//import '../../assets/admin/js/scripts';
import { Navigate } from 'react-router-dom';

import {   Routes, Route  } from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';
import Navbar from './Navbar';
import publicRoutesList from '../../routes/Publicroutelist'


const FrontendLayout = () => {

    return (
        <div>
            <Navbar />
            <div >
               

                <div >

                    <main >
                        <Routes>

                            {publicRoutesList.filter(route => route.component)
                                .map(({ path, component: Component }, idx) => (
                                    <Route
                                        key={idx}
                                        path={path}
                                        element={<Component />}
                                    />
                                ))}
                            <Route
                                path="/"
                                element={<Navigate to="/" />}
                            />
                        </Routes>

                    </main>

                </div>
            </div>
        </div>

    )
}

export default FrontendLayout;