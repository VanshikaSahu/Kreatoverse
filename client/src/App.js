import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import './App.css';
import AdminLoginComponent from "./component/auth/adminLogin.component";
import VendorLoginComponent from "./component/auth/vendorLoginComponent";
import MainComponent from "./component/main.component";
import CreateVendor from "./component/super-admin/create-vendor";
import VendorDetails from "./component/super-admin/vendor-details";
import VendorList from "./component/super-admin/vendor-list";
import CreateProduct from "./component/vendor-panel/create-product";
import ProductList from "./component/vendor-panel/product-list";
import PrivateRoute from "./security/PrivateRoute";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        <Route path="/admin-login" element={<AdminLoginComponent />} />
        <Route path="/vendor-login" element={<VendorLoginComponent />} />
        <Route path="/" element={<PrivateRoute component={MainComponent} />} />
        
        <Route path="" />

        <Route path="/vendors" element={<PrivateRoute component={Outlet} />} >
          <Route path="" element={<VendorList />} />
          <Route path=":id" element={<VendorDetails />} />
          <Route path="create" element={<CreateVendor/>} />
        </Route>

            <Route path="/vendor-products" element={<PrivateRoute component={Outlet} />} >
              <Route path="" element={<ProductList />} />
              <Route path="create" element={<CreateProduct/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
