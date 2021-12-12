import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Routes, Route, Swit } from 'react-router-dom';
import MasterLayout from '../src/layouts/admin/MasterLayout'

import Dashboard from './components/admin/Dashboard';
import Profile from './components/admin/Profiles';
import Login from './components/frontend/frontend/Auth/Login'
import Register from './components/frontend/frontend/Auth/Register'
import Home from './components/frontend/Home';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />

          {/*<Route  path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />}/>   */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/admin" element={<MasterLayout />} >

            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/profile" element={<Profile />} />

          </Route>





        </Routes>

      </Router>

    </div>
  );
}

export default App;
