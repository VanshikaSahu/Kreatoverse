import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import './App.css';
import LoginComponent from "./component/auth/login.component";
import MainComponent from "./component/main.component";
import CreateVendor from "./component/super-admin/create-vendor";
import VendorDetails from "./component/super-admin/vendor-details";
import VendorList from "./component/super-admin/vendor-list";
import PrivateRoute from "./security/PrivateRoute";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        <Route path="/log-in" element={<LoginComponent />} />
        <Route path="/" element={<Outlet />} >
            <Route path="/vendor" element={<Outlet />} >
              <Route path="" element={<VendorList />} />
              <Route path=":id" element={<VendorDetails />} />
              <Route path="create" element={<CreateVendor/>} />
            </Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
