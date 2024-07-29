import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderPaths = ["/signin", "/signup"];

  const noFooterPaths = ["/signin", "/signup","/dashboard"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <Navbar/>}
      <Outlet />
      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default MainLayout;

/*import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Navbar />}
      <Outlet />
      {location.pathname === "/" && <Footer />}
    </>
  );
};

export default MainLayout;
*/
