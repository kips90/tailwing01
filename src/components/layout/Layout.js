import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>

     <div className="min-h-[80vh]">
        <Outlet />
     </div>

      <Footer/>
    </>
  )
};

export default Layout;