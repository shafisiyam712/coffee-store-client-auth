import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Singin from './components/Signin.jsx';
import Singup from './components/Signup.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-with-auth-two.vercel.app/coffee')
      },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-with-auth-two.vercel.app/coffee/${params.id}`)
      },
      {
        path:'singin',
        element:<Signin></Signin>
      },
      {
        path:'singup',
        element:<Signup></Signup>
      },
      {
        path:'users',
        element:<Users></Users>,
        loader: () => fetch('https://coffee-store-server-with-auth-two.vercel.app/users')
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
