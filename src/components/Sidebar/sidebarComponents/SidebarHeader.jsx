import React, { useState } from "react";
import { LuArrowLeftRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useSidebar } from "../../../utils/context/SidebarProvider";
import { Link } from "react-router-dom";

function SidebarHeader({ handleToggle }) {
  const { isCollapsed, setIsCollapsed, isMenuOpen, setMenuIsOpen } =
    useSidebar();

  const handleMenuClose = () => {
    setMenuIsOpen((prev) => !prev);
  };
  return (
    <div
      className={`flex items-center ${
        isCollapsed ? "justify-center" : "justify-between"
      }  ${
        isCollapsed ? "px-0" : "px-5"
      }  py-3 bg-sidebarColor-header border-b border-[#454b54]`}
    >
      <Link to="/" className={`${isCollapsed ? "ml-0" : "ml-5"} py-2 `}>
        {isCollapsed ? (
          <img
            src="/assets/images/logo_light_icon.png"
            alt="logo"
            className="h-[32px]"
          />
        ) : (
          <img
            src="/assets/images/logo_light.png"
            alt="logo"
            className="h-[32px]"
          />
        )}
      </Link>

      <button
        type="button"
        onClick={isMenuOpen ? handleMenuClose : handleToggle}
        className={`rounded-full  transition-colors duration-300 bg-sidebarColor-headerIcon hover:bg-sidebarColor-hover p-[8px] ${
          isCollapsed && "hidden"
        }`}
      >
        <LuArrowLeftRight size={18} className="hidden lg:block" />
        <IoMdClose size={23} className="lg:hidden block" />
      </button>

      {/* <button
        type="button"
        onClick={handleMenuClose}
        className={`rounded-full  transition-colors duration-300 bg-sidebarColor-headerIcon hover:bg-sidebarColor-hover p-[6px] ${
          isCollapsed && "hidden"
        }`}
      >
        <IoMdClose size={23} />
      </button> */}
    </div>
  );
}

export default SidebarHeader;
