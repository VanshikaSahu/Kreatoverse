import { SecurityManager } from './security.manager'
import { Navigate } from 'react-router'

export default function PrivateRoute({ component: Component, ...rest }) {

    const isLogged = SecurityManager.loggedIn();

    return isLogged ? <Component/> : <Navigate to="/log-in" />;
}