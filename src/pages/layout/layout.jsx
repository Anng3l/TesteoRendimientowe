// Layout.jsx
import React from 'react';
import Navbar from "../../components/navbar/Navigationbar";
import { Outlet } from 'react-router-dom';

function Layout({ isAuthenticated }) {
  return (
    <>
      {/* Muestra el Navbar solo si el usuario está autenticado */}
      {isAuthenticated && <Navbar />}
      <Outlet />      
    </>
  );
}

export default Layout;
