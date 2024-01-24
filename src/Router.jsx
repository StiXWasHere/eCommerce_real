import Navbar from './assets/Navbar.jsx'
import Sidebar from './assets/Sidebar.jsx'
import ProductCard from './assets/ProductCard.jsx'
import ProductList from './assets/ProductList.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {useState} from 'react'
import { useFetch } from "../hooks/useFetch"
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Cart from "./pages/Cart.jsx"
import Store from "./pages/Store.jsx"
import Contact from "./pages/Contact.jsx"
/*import Product from "./pages/Product.jsx"*/
import RootLayout from "./layout/RootLayout.jsx"
import CartLayout from './layout/CartLayout.jsx'
import ProductLayout from "./layout/ProductLayout.jsx"
import ContactLayout from "./layout/ContactLayout.jsx"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      
      {
        path: "store",
        element: <Store />
      },
    ]
  },
  {
    path: "/checkout",
    element: <CartLayout />,
    children: [
      {
        index: true,
        element: <Cart />
      }
    ]
  },
  {
    path: "/product/:id",
    element: <ProductLayout />
  },
  {
    path: "/contact",
    element: <ContactLayout />,
    children: [
      {
        index: true,
        element: <Contact />
      }
    ]
  }
])
