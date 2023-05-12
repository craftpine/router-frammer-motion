import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  console.log(children)
  return (
    <>
      <NavBar />
      <main className="max-w-7xl m-auto min-h-[calc(100vh-127px)] p-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
