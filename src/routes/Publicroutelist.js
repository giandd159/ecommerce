
import Home from '../components/frontend/Home';
import About from '../components/frontend/About';
import Contact from '../components/frontend/Contact';


import ViewCategory from '../components/frontend/Collections/ViewCategory';
import ViewProduct from '../components/frontend/Collections/ViewProduct';

import ProductDetail from '../components/frontend/Collections/ProductDetail';

import Cart from '../components/frontend/Cart';

import Checkout from '../components/frontend/Checkout';
import ThankYou from '../components/frontend/ThankYou';


const publicRoutesList = [

    { path: "/", exact: true, name: "Home", component: Home },
    { path: "/about", exact: true, name: "About", component: About },
    { path: "/contact", exact: true, name: "Contact", component: Contact },


    { path: "/collections", exact: true, name: "ViewCategory", component: ViewCategory },
    { path: "/collections/:slug", exact: true, name: "ViewProduct", component: ViewProduct },
    { path: "/collections/:category/:product", exact: true, name: "ProductDetail", component: ProductDetail },
    { path: "/cart", exact: true, name: "Cart", component: Cart },
    { path: "/checkout", exact: true, name: "Checkout", component: Checkout },
    { path: "/thank-you", exact: true, name: "ThankYou", component: ThankYou },


];


export default publicRoutesList; 