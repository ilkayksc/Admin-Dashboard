import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import "./App.css";
const App = () => {
  const activeMenu = false;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4">
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            Sidebar
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            Navbar
          </div>
        </div>
        <div>
          {/*  Dashboard */}
          <Routes path="/" element="ECommerce"></Routes>
          <Routes path="/ecommerce" element="ECommerce"></Routes>
          {/*  Pages */}
          <Routes path="/orders" element="Orders"></Routes>
          <Routes path="/employees" element="Employees"></Routes>
          <Routes path="/customers" element="Customer"></Routes>
          {/*  Apps */}
          <Routes path="/kanban" element="Kanban"></Routes>
          <Routes path="/editor" element="Editor"></Routes>
          <Routes path="/calendar" element="Calendar"></Routes>
          <Routes path="/color-picker" element="ColorPicker"></Routes>
          {/* Charts*/}
          <Routes path="/line" element="Line"></Routes>
          <Routes path="/area" element="Area"></Routes>
          <Routes path="/bar" element="Bar"></Routes>
          <Routes path="/pie" element="Pie"></Routes>
          <Routes path="/financial" element="Financial"></Routes>
          <Routes path="/color-mappinng" element="ColorMapping"></Routes>
          <Routes path="/pyramid" element="Pyramid"></Routes>
          <Routes path="/stacked" element="Stacked"></Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
