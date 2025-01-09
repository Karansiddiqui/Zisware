import React, { useState, useRef, useEffect } from "react";
import SidebarHeader from "./sidebarComponents/SidebarHeader.jsx";
import SidebarCustomer from "./sidebarComponents/SidebarCustomer.jsx";
import { mainMenuItems } from "./menuSections/mainSection";
import { layoutMenuItems } from "./menuSections/layoutSection";
import SidebarItems from "./SidebarItems.jsx";
import SidebarUpgradeCard from "./sidebarComponents/SidebarUpgradeCard.jsx";
import { BsThreeDots } from "react-icons/bs";
import { useSidebar } from "../../utils/context/SidebarProvider.jsx";

export function Sidebar() {
  const sidebarRef = useRef(null);
  const { isCollapsed, setIsCollapsed, isLocked, setIsLocked, isMenuOpen } =
    useSidebar();

  const [activeItem, setActiveItem] = useState("");
  const [upgardeCardHide, setUpgardeCardHide] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveItem("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isLocked) {
      setIsCollapsed(false);
    }
  };

  const handleMouseLeave = () => {
    if (isLocked) {
      setIsCollapsed(true);
    }
  };

  const handleToggle = () => {
    if (window.innerWidth > 991) {
      if (isLocked) {
        setIsCollapsed(false);
        setIsLocked(false);
      } else {
        setIsCollapsed(true);
        setIsLocked(true);
      }
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={`z-[1000] border border-r-[1px] border-transparent  min-h-screen fixed top-0 ${
        isMenuOpen ? "left-0" : "-left-sidebarLeft"
      }  lg:left-0 ${
        isCollapsed ? "w-sidebarCollapsed" : "w-sidebar"
      } bg-sidebarColor transition-all duration-200 `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`  flex flex-col  bg-sidebarColor text-white transition-all duration-200 `}
      >
        {/* Sidebar Header */}
        <SidebarHeader handleToggle={handleToggle} />

        {/* Content Section */}
        <div
          className={`${
            !upgardeCardHide ? "h-[calc(100vh-310px)]" : "h-[calc(100vh-75px)]"
          } ${
            !isCollapsed && "overflow-y-auto"
          }  sliderbar hover:cursor-pointer`}
        >
          {/* Customer Section */}
          {!isCollapsed && <SidebarCustomer />}

          {/* Main Section */}
          <div className="py-4 px-5">
            {isCollapsed ? (
              <div className="py-1">
                <BsThreeDots />
              </div>
            ) : (
              <div className="text-xs leading-3 font-semibold text-gray-400 uppercase">
                Main
              </div>
            )}
          </div>
          <div className="space-y-[1px]">
            <SidebarItems
              items={mainMenuItems}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>

          {/* Layout Section */}
          <div className="py-4 px-5">
            {isCollapsed ? (
              <div className="py-1">
                <BsThreeDots />
              </div>
            ) : (
              <div className="text-xs font-semibold text-gray-400 uppercase">
                Layout
              </div>
            )}
          </div>

          <div className="space-y-[1px]">
            <SidebarItems
              items={layoutMenuItems}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </div>
        </div>

        <SidebarUpgradeCard
          upgardeCardHide={upgardeCardHide}
          setUpgardeCardHide={setUpgardeCardHide}
        />
      </div>
    </div>
  );
}
