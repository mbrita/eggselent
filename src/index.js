import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import HomePage from "./pages/home/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)

reportWebVitals(console.log)
