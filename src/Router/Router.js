import { Route, Routes, useNavigate } from "react-router-dom";
import DevLayout from "../components/Admin/DevLayout";
import SupplierLayout from "../components/supplier/layout/SupplierLayout";
import SupplierHomePage from "../pages/supplier/SupplierHomePage";
import SupplierSignUpPage from "../pages/supplier/SupplierSignUpPage";
import DynamicAddProductPage from "../pages/supplier/DynamicAddProductPage";
import MyShopPage from "../pages/supplier/MyShopPage";
import DynamicBalancePage from "../pages/supplier/DynamicBalancePage";
import DynamicOrderTrackingPage from "../pages/supplier/DynamicOrderTrackingPage";
import DynamicProductPage from "../pages/supplier/DynamicProductPage";

function Router() {
  return (
    <Routes>
      <Route path="/supplier" element={<SupplierLayout />}>
        <Route path="" element={<SupplierHomePage />} />
        <Route path="signup" element={<SupplierSignUpPage />} />
        <Route path="my-product" element={<DynamicProductPage />} />
        <Route path="add-product" element={<DynamicAddProductPage />} />
        <Route path="my-shop" element={<MyShopPage />} />
        <Route path="balance-page" element={<DynamicBalancePage />} />
        <Route
          path="order-tracking-page"
          element={<DynamicOrderTrackingPage />}
        />
      </Route>
      <Route path="/admin" element={<DevLayout />}></Route>
      <Route path="*" element={useNavigate("/")} />
    </Routes>
  );
}

export default Router;
