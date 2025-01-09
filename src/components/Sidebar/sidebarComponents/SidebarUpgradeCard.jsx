import { React, useState } from "react";
import { PiLockKeyOpen } from "react-icons/pi";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useSidebar } from "../../../utils/context/SidebarProvider.jsx";
import { Link } from "react-router-dom";

function SidebarUpgradeCard({ upgardeCardHide, setUpgardeCardHide }) {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  return (
    <div
      className={`text-slidebarColor bg-upgradeCardColor bg-opacity-20 text-sm m-5 p-5 rounded-md ${
        upgardeCardHide && "hidden"
      } ${isCollapsed && "hidden"}`}
    >
      <div className="relative">
        <div
          className="absolute top-0 right-0 text-xl text-gray-400 hover:text-gray-300 transition-text duration-200  cursor-pointer"
          onClick={() => {
            setUpgardeCardHide(true);
          }}
        >
          <RxCross2 />
        </div>
        <div className="text-xl bg-white bg-opacity-[0.1] p-[10px] rounded-full w-fit mb-[0.825rem]">
          <PiLockKeyOpen
            style={{ stroke: "white", fill: "white", strokeWidth: "4" }}
          />
        </div>
        <p className="mb-[0.825rem] leading-[1.631]">
          Upgrade to <b>Pro plan</b> to unlock all available features
        </p>
        <Link
          to="#"
          className="flex items-center text-blue-400 hover:text-blue-300  mt-1"
        >
          Upgrade now{" "}
          <span className=" ml-4 text-xl">
            <HiOutlineArrowRightCircle />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default SidebarUpgradeCard;
