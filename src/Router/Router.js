import { Route, Routes, useNavigate } from "react-router-dom";
import Clientlayout from "../pages/Clientlayout";
import Landingpage from "../pages/Userpages/Landingpage";
import ClientSignUpPage from "../pages/client/ClientSignUpPage";
import CategoryPage from "../pages/client/CategoryPage";
import ProductItemPage from "../pages/client/ProductItemPage";
import CartPage from "../pages/client/CartPage";
import PaymentPage from "../pages/client/PaymentPage";
import SaleOrderTrackingPage from "../pages/client/SaleOrderTrackingPage";
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
      <Route path="/" element={<Clientlayout />}>
        <Route path="" element={<Landingpage />} />
        <Route path="signup" element={<ClientSignUpPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="product-item" element={<ProductItemPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="sale-order-tracking" element={<SaleOrderTrackingPage />} />
      </Route>
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
