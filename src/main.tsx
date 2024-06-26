import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import SinglePage from "./components/pages/SinglePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SinglePage />,
  },
  {
    path: "/default",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
