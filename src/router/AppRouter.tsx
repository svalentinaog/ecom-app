import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout";

import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import ContactPage from "@/pages/ContactPage";

import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

import CartPage from "@/pages/CartPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
