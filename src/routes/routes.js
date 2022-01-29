import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profiles';
import Login from '../components/frontend/frontend/Auth/Login';
import Register from '../components/frontend/frontend/Auth/Register';
import MasterLayout from '../layouts/admin/MasterLayout';
const routes = [
   //  { path: "/admin", exact: true, name: "Admin", component: MasterLayout },
    {
      path: "/admin/dashboard",
      exact: true,
      name: "Dashboard",
      component: Dashboard
    },
    { path: "/admin/profile", exact: true, name: "Profile", component: Profile },
    { path: "/admin/login", exact: true, name: "Login", component: Login },
    {
      path: "/admin/register",
      exact: true,
      name: "Register",
      component: Register
    }
  ];


export default routes; 