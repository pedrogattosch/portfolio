import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RootLayout from "./components/RootLayout";
import Resume from "./pages/Resume";
import "./styles/tailwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <App />
      </RootLayout>
    ),
  },
  {
    path: "/curriculo",
    element: (
      <RootLayout>
        <Resume />
      </RootLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
