import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Dashboard from './pages/dashboard';
import Login from './pages/authentication/login';



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