import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';

  import Dashboard from './pages/dashboard';
  import Login from './pages/authentication/login';
  import Stock from './pages/stock';
  import Sales from './pages/sales';
  import Employees from './pages/employees';
  import Reports from './pages/reports';
  import EditProduct from './pages/stock/edit';
import AddProduct from './pages/stock/add';
import AddEmployee from './pages/employees/add';


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
      path: "/stock/edit",
      element: <EditProduct/>
    },
    {
      path: "/stock/add",
      element: <AddProduct/>
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
    },
    {
      path: "/employees/add",
      element: <AddEmployee/>
    }
  ]);
  
  export function Routes() {
    return <RouterProvider router={router} />;
  }