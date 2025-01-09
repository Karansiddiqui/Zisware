import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Changelog from "./components/Changelog/Changelog";
import { SidebarProvider } from "./utils/context/SidebarProvider";
import CustomRouter from "./CustomRouter";
function App() {
  return (
    <SidebarProvider>
      {/* <Router>
        <div className="flex bg-gray-100 overflow-hidden">
          <Sidebar />
          <div className="flex-1 relative flex flex-col">
            <Header />
            <div className="p-4">
              <Routes>
                <div
                  className={`mt-[62px]  bg-[#f1f4f9] transition-all duration-200   ${
                    isLocked
                      ? "w-full lg:w-[calc(100%-4rem)] lg:left-4rem lg:ml-sidebarCollapsedWidth"
                      : "w-full lg:w-[calc(100%-15.25rem)] lg:left-15.25rem lg:ml-sidebarWidth"
                  }`}
                >
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/changelog" element={<Changelog />} />
                </div>
              </Routes>
            </div>
          </div>
        </div>
      </Router> */}
      <CustomRouter />
    </SidebarProvider>
  );
}

export default App;
