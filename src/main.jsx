import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// Estilos globales
import './index.css';

// Páginas a rutear
import { About } from './pages/about/About.jsx';
import { Team } from './pages/equipo/Team.jsx';
import Home from './pages/home/home.jsx';
import Pokedex from './pages/pokedex/Pokedex.jsx';
import FaceAuth from './pages/Authentication/FaceAuth.jsx';
import Card from './components/card/card.jsx';
import { NotFound } from './pages/notFound/notFound.jsx';
import Layout from './pages/layout/layout.jsx';

function MainRouter() {
  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const router = createBrowserRouter([
    {
      element: <Layout isAuthenticated={isAuthenticated} />, // Pasa el estado al Layout
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: isAuthenticated ? <Home /> : <Navigate to="/auth" replace />,
        },
        {
          path: "/ask",
          element: isAuthenticated ? <Team /> : <Navigate to="/auth" replace />,
        },
        {
          path: "/home",
          element: isAuthenticated ? <Home /> : <Navigate to="/auth" replace />,
        },
        {
          path: "/about",
          element: isAuthenticated ? <About /> : <Navigate to="/auth" replace />,
        },
        {
          path: "/pokedex",
          element: isAuthenticated ? <Pokedex /> : <Navigate to="/auth" replace />,
        },
        {
          path: "/auth",
          element: <FaceAuth setIsAuthenticated={setIsAuthenticated} />, // Pasa setIsAuthenticated a FaceAuth
        },
        {
          path: "/card",
          element: isAuthenticated ? <Card /> : <Navigate to="/auth" replace />,
        }
      ]
    }
  ]);

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// Renderizado principal
createRoot(document.getElementById('root')).render(<MainRouter />);
