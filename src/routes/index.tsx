import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/Register";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { CartProvider } from "../contexts/CartContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <CartProvider>
              <DashboardPage />
            </CartProvider>
          }
        />
      </Route>
    </Routes>
  );
};
