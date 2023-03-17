import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/DefaultLayout";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import IoTSetting from "./pages/IotSetting";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="iot-setting" element={<IoTSetting />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
