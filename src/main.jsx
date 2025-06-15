import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Contact from './components/Contact'
import RootLayout from './components/RootLayout';
import './styles/tailwind.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <App/>
      </RootLayout>),
  },
  {
    path: "/contato",
    element: (
      <RootLayout>
        <Contact/>
      </RootLayout>),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)