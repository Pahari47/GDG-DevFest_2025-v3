import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout1 from './layout/Layout1.jsx'
import Home from './pages/Home.jsx'
import TeamSection from './pages/Team.jsx'
import Speakers from './pages/speakers.jsx'
import TicketPricing from './pages/TicketPricing.jsx' 
import CtfwinnerPage from './pages/CtfwinnerPage.jsx'
// Sujoy Garai

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout1 />,
    children: [
      { index: true, element: <Home /> },
      { path: "team", element: <TeamSection /> },
      { path: "speakers", element: <Speakers /> },
      { path: "TicketPricing", element: <TicketPricing /> }, 
      { path: "ctfwinner", element: <CtfwinnerPage /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)