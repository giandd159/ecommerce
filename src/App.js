import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Routes, Route, Swit } from 'react-router-dom';
import MasterLayout from '../src/assets/layouts/admin/MasterLayout'
import Dashboard from './assets/components/admin/Dashboard';
import Profile from './assets/components/admin/Profiles';
import Login from '../src/assets/frontend/Auth/Login'
import Register from '../src/assets/frontend/Auth/Register'


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<div>Default Page Content</div>} />

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
