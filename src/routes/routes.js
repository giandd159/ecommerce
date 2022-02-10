import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/Profiles';
import Login from '../components/frontend/frontend/Auth/Login';
import Register from '../components/frontend/frontend/Auth/Register';
import Category from '../components/admin/category/Category';
import ViewCategory from '../components/admin/category/ViewCategory';
import EditCategory from '../components/admin/category/EditCategory';

import AddProduct from '../components/admin/product/AddProduct';
import ViewProduct from '../components/admin/product/ViewProduct';
import EditProduct from '../components/admin/product/EditProduct';

//import EditCategory from '../components/admin/category/EditCategory';



const routes = [
   //  { path: "/admin", exact: true, name: "Admin", component: MasterLayout },
    {
      path: "/admin/dashboard",
      exact: true,
      name: "Dashboard",
      component: Dashboard
    },
    //Category

    { path: "/admin/add-category", exact: true, name: "Category", component: Category },
    { path: "/admin/view-category", exact: true, name: "ViewCategory", component: ViewCategory },
    { path: "/admin/edit-category/:id", exact: true, name: "EditCategory", component: EditCategory },

//Product
    { path: "/admin/add-product", exact: true, name: "AddProduct", component: AddProduct },
   { path: "/admin/view-product", exact: true, name: "ViewProduct", component: ViewProduct },
    { path: "/admin/edit-product/:id", exact: true, name: "EditProduct", component: EditProduct },


    
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