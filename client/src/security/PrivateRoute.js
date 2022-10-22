import { SecurityManager } from './security.manager'
import { Navigate } from 'react-router'
import MainComponent from '../component/main.component';

export default function PrivateRoute({ component: Component, ...rest }) {
    const vendorLogged = SecurityManager.vendorloggedIn();
    const adminLogged = SecurityManager.adminloggedIn();

    const adminButtons= [{name: "View Vendors", redirectionLink: "/vendors"}, {name: "Create Vendors", redirectionLink: "/vendors/create"}]
    const vendorButtons= [{name: "View Products", redirectionLink: "/vendor-products"}, {name: "Create Products", redirectionLink: "/vendor-products/create"}]  

    return vendorLogged ? <Component name="Vendor Portal" desc="You can create and update your products here" vendorButtons={vendorButtons}/> :adminLogged? <Component name="Admin Portal" desc="You can create vendors and track their activities" buttons ={adminButtons}/>: <Navigate to="/log-in" />;
}