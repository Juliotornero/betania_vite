import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { PantallaProvider } from './components/PantallaContext'; // Importa el contexto

import Layout from './components/Layout';
import Main from './components/Main';

import Rooms from './pages/Rooms';
import Services from './pages/Services'
import Offers from './pages/Offers'
import DiscoverPisco from './pages/DiscoverPisco'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import ClaimsBook from './pages/ClaimsBook'
import Legal from './pages/Legal'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Main />,
      },
      {
        path: '/habitaciones',
        element: <Rooms />,
      },
      {
        path: '/servicios',
        element: <Services />,
      },
      {
        path: '/ofertas',
        element: <Offers />,
      },
      {
        path: '/pisco',
        element: <DiscoverPisco />,
      },
      {
        path: '/preguntas',
        element: <Faq />,
      },
      {
        path: '/contacto',
        element: <Contact />,
      },
      {
        path: '/reclamos',
        element: <ClaimsBook />,
      },
      {
        path: '/legal',
        element: <Legal />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PantallaProvider> {/* Wrap de PantallaProvider alrededor de la aplicación */}
      <RouterProvider router={router} />
    </PantallaProvider>
  </React.StrictMode>,
);
