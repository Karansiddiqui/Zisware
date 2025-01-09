import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Changelog from "./components/Changelog/Changelog";
import { SidebarProvider } from "./utils/context/SidebarProvider";
import { useSidebar } from "./utils/context/SidebarProvider";

function CustomRouter() {
  const { isLocked, isNotificationOpen } = useSidebar();

  return (
    <Router>
      <div className={`flex bg-gray-100 overflow-hidden `}>
        <Sidebar />
        <div
          className={`flex-1 relative flex flex-col transition-all duration-200 ${
            isNotificationOpen &&
            "after:absolute after:top-0 after:h-full after:w-full after:bg-[#46464693]"
          } ${
            isLocked
              ? "bg-[#f1f4f9] lg:w-[calc(100%-4rem)]  lg:ml-sidebarCollapsedWidth"
              : " bg-[#f1f4f9] lg:w-[calc(100%-15.25rem)] lg:ml-sidebarWidth"
          }`}
        >
          <Header />
          <div className={`mt-[63px] relative `}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/changelog" element={<Changelog />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default CustomRouter;
