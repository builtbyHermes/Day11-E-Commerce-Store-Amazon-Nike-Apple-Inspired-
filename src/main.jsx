import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

import { CartProvider } from "./context/CartContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import CartDrawer from "../features/cart/components/CartDrawer/CartDrawer";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(

  <StrictMode>

            <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>

  </StrictMode>

);