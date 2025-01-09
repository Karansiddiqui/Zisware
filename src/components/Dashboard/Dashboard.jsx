import React, { useEffect, useState, useRef } from "react";
import Footer from "../Footer/Footer";
import { IoAdd } from "react-icons/io5";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import Trafic_Source_stat from "./Trafic_Source_stat/Trafic_Source_stat";
import {
  PiBriefcase,
  PiFolderSimpleUser,
  PiUserGear,
  PiUsersFour,
} from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import BasicLayout from "./Basic_Layout/Basic_layout";
import { useSidebar } from "../../utils/context/SidebarProvider.jsx";
import Marketing_Campaigns from "./Marketing-Campaigns/MarketingCampaigns.jsx";
import DailySalesStats from "../DailtSalesStats/DailySalesStats.jsx";
import SupportTickets from "./SupportTickets/SupportTickets.jsx";
import LatestPosts from "./LatestPosts/LatestPosts.jsx";
import Messages from "./Messages/Messages.jsx";
import SalesStats from "./SalesStats/SalesStats.jsx";
import DailyFinancials from "./Daily_Finacial/DailyFinancial.jsx";
import ThreeCharts from "./ThreeCharts/ThreeCharts.jsx";

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuParentRef = useRef(null);
  const [isUserOpen, setUserIsOpen] = useState(false);

  const users = [
    {
      id: "3",
      name: "User 1",
      image: "/assets/images/users/face10.jpg",
      status: "offline",
    },
    {
      id: "4",
      name: "User 2",
      image: "/assets/images/users/face11.jpg",
      status: "online",
    },
    {
      id: "5",
      name: "User 3",
      image: "/assets/images/users/face12.jpg",
      status: "online",
    },
    {
      id: "6",
      name: "User 4",
      image: "/assets/images/users/face13.jpg",
      status: "online",
    },
  ];

  const menuItems = [
    { icon: <PiBriefcase size={20} />, text: "Customer details", link: "#" },
    {
      icon: <PiFolderSimpleUser size={20} />,
      text: "User directory",
      link: "#",
    },
    {
      icon: <PiUserGear size={20} />,
      text: "Permissions",
      link: "#",
      border: true,
    },
    {
      icon: <PiUsersFour size={20} />,
      text: "Manage users",

      link: "#",
    },
  ];

  const openUsers = () => {
    setUserIsOpen((prev) => !prev);
    console.log("clicked");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuParentRef.current &&
        !menuParentRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 992) {
        setUserIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={` bg-[#f1f4f9] transition-all duration-200   `}>
      <div className="p-5 space-y-6 max-w-[100vw]">
        <div
          className={`flex items-center gap-4 justify-between ${
            isUserOpen ? "flex-col" : "flex-row"
          }`}
        >
          <div className={`flex justify-between items-center w-full `}>
            <h1 className="text-xl ">
              <span className="font-semibold">Home</span> - Dashboard
            </h1>

            <button
              className={`text-xs bg-gray-300 rounded-full p-2 text-gray-500 lg:hidden transition-all duration-200 ${
                isUserOpen ? "rotate-90" : "rotate-0"
              }`}
              onClick={openUsers}
            >
              <IoIosArrowForward size={18} />
            </button>
          </div>

          <div
            className={`lg:block w-full lg:w-fit ${isUserOpen ? "" : "hidden"}`}
          >
            <div className="flex gap-4 items-center">
              <div className="flex gap-[3px] items-center">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="relative hover:cursor-pointer z-0"
                  >
                    <div
                      key={user.id}
                      className=" h-9 w-9 rounded-full border-2 border-white"
                    >
                      <img
                        src={user.image}
                        alt={user.name}
                        className="rounded-full"
                      />
                    </div>
                    <span
                      className={`absolute bottom-[-2px] right-[-2px] p-[.3125rem] rounded-full border-[2.5px] border-white ${
                        user.status === "online"
                          ? "bg-green-600"
                          : user.status === "away"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <div className="h-6 border-l-[1px] border-slate-300"></div>
              <div className="hover:cursor-pointer z-0 bg-blue-600 text-white p-1 rounded-full">
                <IoAdd size={24} />
              </div>
              <div
                className="relative hover:cursor-pointer z-[1] bg-gray-100 border-[1px] border-borderColor p-[6px] hover:border-gray-400 hover:bg-gray-200 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                ref={menuParentRef}
              >
                <PiDotsThreeVerticalBold size={18} />
                {isMenuOpen && (
                  <div
                    ref={menuRef}
                    className="absolute top-[110%] right-0 min-w-[13.75rem] bg-white rounded-lg border-[1px] border-borderColor shadow-lg text-sm py-2 z-[60]"
                  >
                    {menuItems.map((item, index) => (
                      <div key={index}>
                        <a
                          href={item.link}
                          className={`w-full px-4 py-2 my-1  flex items-center justify-between  hover:bg-gray-100 `}
                        >
                          <div className="flex space-x-3 ">
                            <span className="text-gray-500">{item.icon}</span>
                            <span className="text-gray-700">{item.text}</span>
                          </div>
                          {item.badge && (
                            <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </a>
                        {item.border && (
                          <div className="border-t-[1px] border-borderColor my-2"></div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Trafic_Source_stat />
        </div>

        {/* Tables */}
        <div className=" flex flex-col xl:flex-row gap-4 ">
          <div className="max-w-[100vw] xl:max-w-[66.66666667%] space-y-6 ">
            <Marketing_Campaigns />
            <ThreeCharts />
            <SupportTickets />
            <LatestPosts />
          </div>

          <div className=" xl:w-[32.233333%] space-y-6">
            <DailySalesStats />
            <SalesStats />
            <Messages />
            <DailyFinancials />
          </div>
        </div>

        {/* Form */}
        <div>
          <BasicLayout />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Dashboard;
