import { Header , Footer } from "./component/index.js";

import React from "react";
import { Outlet } from "react-router-dom";



function Layout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
