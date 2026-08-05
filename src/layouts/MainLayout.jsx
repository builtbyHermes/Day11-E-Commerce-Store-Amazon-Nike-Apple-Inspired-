import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CartDrawer from "../components/CartDrawer/CartDrawer";
function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
       <CartDrawer />

      <Footer />
    </>
  );
}

export default MainLayout;