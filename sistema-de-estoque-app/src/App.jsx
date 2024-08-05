import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Dashboard from './pages/dashboard';
import Login from './pages/authentication/login';
import Stock from './pages/stock';
import Sales from './pages/sales';
import Employees from './pages/employees';
import Reports from './pages/reports';
import EditProduct from './pages/stock/edit';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  }, 
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/stock/:id",
    element: <EditProduct/>
  },
  {
    path: "/stock",
    element: <Stock/>
  },
  {
    path: "/sales",
    element: <Sales/>
  },
  {
    path: "/reports",
    element: <Reports/>
  },
  {
    path: "/employees",
    element: <Employees/>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App