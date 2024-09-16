import { createBrowserRouter, Navigate, Route, BrowserRouter as Router, RouterProvider, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from "./contexts/authContext.jsx";
import './App.css'
import Login from './pages/authentication/login';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from './pages/authentication/forgotPassword';
import Header from './components/header/index.js';
import Stock from './pages/stock/index.js';
import EditProduct from './pages/stock/edit/index.js';
import Sales from './pages/sales/index.js';
import Employees from './pages/employees/index.js';
import AddProduct from './pages/stock/add/index.js';
import EditEmployee from './pages/employees/edit/index.js';
import AddEmployee from './pages/employees/add/index.js';
import Dashboard from './pages/dashboard/index.js';
import Reports from './pages/reports/index.js';
// import { Routes } from './Routes';


const PrivateRoute = ({ children }) => {
  const { isLogged } = useAuth();
  console.log(isLogged());
  return isLogged() ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <Router>
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Header />
                <Dashboard/>
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Header />
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/stock"
            element={
              <PrivateRoute>
                <Header />
                <Stock />
              </PrivateRoute>
            }
          />

          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <Header />
                <Reports />
              </PrivateRoute>
            }
          />

          <Route
            path="/stock/edit"
            element={
              <PrivateRoute>
                <Header />
                <EditProduct />
              </PrivateRoute>
            }
          />

          <Route
            path="/stock/add"
            element={
              <PrivateRoute>
                <Header />
                <AddProduct />
              </PrivateRoute>
            }
          />

          <Route
            path="/sales"
            element={
              <PrivateRoute>
                <Header />
                <Sales />
              </PrivateRoute>
            }
          />

          <Route
            path="/employees"
            element={
              <PrivateRoute>
                <Header />
                <Employees />
              </PrivateRoute>
            }
          />

          <Route
            path="/employees/edit"
            element={
              <PrivateRoute>
                <Header />
                <EditEmployee />
              </PrivateRoute>
            }
          />

          <Route
            path="/employees/add"
            element={
              <PrivateRoute>
                <Header />
                <AddEmployee />
              </PrivateRoute>
            }
          />

        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App


/**
 * Página de vendas
 * Página de relatórios
 * Esqueci minha senha
 * Melhorar estilo
 * Gesture?git
 */