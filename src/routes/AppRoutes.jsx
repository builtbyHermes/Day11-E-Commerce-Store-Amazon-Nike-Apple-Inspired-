import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "../layouts/MainLayout";


const Home = lazy(() => import("../features/home/pages/Home"));

const Products = lazy(() =>
  import("../features/products/pages/Products")
);

const ProductDetails = lazy(() =>
  import("../features/products/pages/ProductDetails/ProductDetails")
);

const Cart = lazy(() =>
  import("../features/cart/pages/Cart")
);

const Wishlist = lazy(() =>
  import("../features/wishlist/pages/Wishlist")
);

const Login = lazy(() =>
  import("../features/auth/pages/Login")
);

const Profile = lazy(() =>
  import("../features/auth/pages/Profile")
);

const Checkout = lazy(() =>
  import("../features/checkout/pages/Checkout")
);

const OrderConfirmation = lazy(() =>
  import("../features/checkout/pages/OrderConfirmation")
);

const SearchResults = lazy(() =>
  import("../features/search/pages/SearchResults")
);
function AppRoutes() {
  return (
    <BrowserRouter>

      <Suspense fallback={<p>Loading page...</p>}>

        <Routes>

          <Route element={<MainLayout />}>

            <Route 
              path="/"
              element={<Home />}
            />

            <Route
              path="/products"
              element={<Products />}
            />

            <Route
              path="/products/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/cart"
              element={<Cart />}
            />

            <Route
              path="/wishlist"
              element={<Wishlist />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/checkout"
              element={<Checkout />}
            />
            
            <Route
            path="/order-confirmation"
            element={<OrderConfirmation />}
            />
          </Route>

        </Routes>

      </Suspense>

    </BrowserRouter>
  );
}

export default AppRoutes;