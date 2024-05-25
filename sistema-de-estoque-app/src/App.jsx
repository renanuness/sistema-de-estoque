import { lazy, useState } from 'react'
import './App.css'
import { initializeApp } from "firebase/app";

// import Login from './pages/authentication/login';

const Login = lazy(()=> import("./pages/authentication/login"));

const firebaseConfig = {
  apiKey: "AIzaSyAapYTFKjrbV-aDPeS37OailcH4QPkkXtY",
  authDomain: "sistema-de-estoque-d6464.firebaseapp.com",
  projectId: "sistema-de-estoque-d6464",
  storageBucket: "sistema-de-estoque-d6464.appspot.com",
  messagingSenderId: "254882219928",
  appId: "1:254882219928:web:75a1cb8a5e975e0ea64ded"
};
const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <Login></Login>
    </>
  )
}

export default App