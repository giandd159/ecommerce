
import Home from '../components/frontend/Home';
import About from '../components/frontend/About';
import Contact from '../components/frontend/Contact';


import Collections from '../components/frontend/Collections/ViewCategory';


const publicRoutesList = [

    { path: "/", exact: true, name: "Home", component: Home },
    { path: "/about", exact: true, name: "About", component: About },
    { path: "/contact", exact: true, name: "Contact", component: Contact },


    { path: "/collections", exact: true, name: "Collections", component: Collections },

];


export default publicRoutesList; 