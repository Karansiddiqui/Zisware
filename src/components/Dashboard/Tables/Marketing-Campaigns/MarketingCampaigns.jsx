import React, { useState, useRef, useEffect } from "react";
import {
  Facebook,
  Youtube,
  Music4,
  Twitter,
  MoreVertical,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
  PiDotsThreeBold,
  PiChartLine,
  PiPencil,
  PiLockKey,
  PiGear,
  PiFilePdf,
} from "react-icons/pi";
import { BsList } from "react-icons/bs";
import { MdOutlineArrowUpward, MdArrowDownward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const todayData = [
  {
    icon: "/assets/images/brands/facebook.svg",
    name: "Facebook",
    timeRange: "02:00 - 03:00",
    platform: "Mintime",
    trend: "up",
    percentage: "2.43%",
    amount: "$5,489",
    status: "Active",
  },
  {
    icon: "/assets/images/brands/youtube.svg",
    name: "Youtube videos",
    timeRange: "13:00 - 14:00",
    platform: "CDsoft",
    trend: "up",
    percentage: "3.12%",
    amount: "$2,592",
    status: "Closed",
  },
  {
    icon: "/assets/images/brands/spotify.svg",
    name: "Spotify ads",
    timeRange: "10:00 - 11:00",
    platform: "Diligence",
    trend: "down",
    percentage: "8.02%",
    amount: "$1,268",
    status: "On hold",
  },
  {
    icon: "/assets/images/brands/twitter.svg",
    name: "Twitter ads",
    timeRange: "04:00 - 05:00",
    platform: "Deluxe",
    trend: "up",
    percentage: "2.78%",
    amount: "$7,467",
    status: "On hold",
  },
];

const yesterdayData = [
  {
    icon: "/assets/images/brands/bing.svg",
    name: "Bing campaign",
    timeRange: "02:00 - 03:00",
    platform: "Metrices",
    trend: "down",
    percentage: "5.76%",
    amount: "$5,489",
    status: "Pending",
  },
  {
    icon: "/assets/images/brands/amazon.svg",
    name: "Amazon ads",
    timeRange: "13:00 - 14:00",
    platform: "Blueish",
    trend: "up",
    percentage: "6.79%",
    amount: "$2,592",
    status: "Active",
  },
  {
    icon: "/assets/images/brands/dribbble.svg",
    name: "Dribbble ads",
    timeRange: "10:00 - 11:00",
    platform: "Teamable",
    trend: "down",
    percentage: "9.83%",
    amount: "$1,268",
    status: "Closed",
  },
];

const menuItems = [
  { icon: <PiChartLine size={20} />, text: "View statement", link: "#" },
  {
    icon: <PiPencil size={20} />,
    text: "Edit campaign",
    link: "#",
  },
  {
    icon: <PiLockKey size={20} />,
    text: "Disable campaign",
    link: "#",
    border: true,
  },
  {
    icon: <PiGear size={20} />,
    text: "Settings",

    link: "#",
  },
];

const statusColor = {
  Active: "bg-blue-50 text-blue-500",
  Closed: "bg-red-50 text-red-600",
  "On hold": "bg-[#e8f1f4] text-[#2a7297]",
  Pending: "bg-green-50 text-green-600",
};

const upDownColor = {
  up: "bg-green-600",
  down: "bg-red-600",
};

const profileStatusColor = {
  Active: "bg-blue-500 ",
  Closed: "bg-red-500 ",
  "On hold": "bg-[#2a7297] ",
  Pending: "bg-green-600 ",
};

const campaignsData = [
  {
    value: "38,289",
    change: "16.2",
    date: "May 12, 12:30 am",
    color: "bg-purple-500",
    icon: "🟣",
  },
  {
    value: "2,458",
    change: "-4.9",
    date: "Jun 4, 4:00 am",
    color: "bg-blue-500",
    icon: "🔵",
  },
];
const activeCampaignsCount = 28;

function Marketing_Campaigns() {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [
    isMarketing_Campaigns_settingOpen,
    setMarketing_Campaigns_settingIsOpen,
  ] = useState(false);
  const menuRef = useRef(null);
  const mcsRef = useRef(null);
  const menuParentRef = useRef(null);
  const mcsParentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuParentRef.current &&
        !menuParentRef.current.contains(event.target)
      ) {
        setOpenMenuIndex(null);
      }
      if (
        mcsRef.current &&
        !mcsRef.current.contains(event.target) &&
        menuParentRef.current &&
        !mcsParentRef.current.contains(event.target)
      ) {
        setMarketing_Campaigns_settingIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-full bg-white flex items-center justify-center  border border-borderColor text-sm">
      <div className="w-full bg-white rounded-xl shadow-sm">
        <div className="bg-white border-b border-borderColor ">
          <div className="flex justify-between p-4 border-b border-borderColor items-center px-4 ">
            <h2 className="text-xl text-textColor font-semibold">
              Marketing campaigns
            </h2>

            <div className="flex items-center gap-6">
              <span className="bg-[#059669]  font-semibold text-white px-3 py-1 text-sm rounded-full">
                {activeCampaignsCount} active
              </span>

              <div className="relative">
                <div
                  ref={mcsParentRef}
                  onClick={() =>
                    setMarketing_Campaigns_settingIsOpen(
                      !isMarketing_Campaigns_settingOpen
                    )
                  }
                  className="flex items-center gap-1 hover:cursor-pointer hover:text-blue-500 transition-all duration-200 focus:text-blue-500 text-gray-600"
                >
                  <PiGear size={25} />
                  <IoIosArrowDown size={18} />
                </div>

                {isMarketing_Campaigns_settingOpen && (
                  <div
                    ref={mcsRef}
                    className="absolute top-[110%] right-[8%] min-w-[13.75rem] bg-white rounded-lg border-[1px] border-borderColor shadow-lg text-sm py-2 z-[60]"
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

          <div className="flex justify-between md:items-center  flex-col md:flex-row">
            {campaignsData.map((campaign, index) => {
              const changeValue = parseFloat(campaign.change);
              return (
                <div
                  key={index}
                  className="flex items-center p-4 justify-between  rounded-md"
                >
                  <div className="flex gap-4">
                    <div
                      className={`w-8 h-8 ${campaign.color} rounded-full flex items-center justify-center text-white`}
                    >
                      {campaign.icon || "🔵"}
                    </div>

                    <div className="flex flex-col ">
                      <div className="flex items-center text-textColor gap-4">
                        <h3 className="text-lg  font-medium">
                          {campaign.value}
                        </h3>
                        <p
                          className={`text-base flex items-center gap-1 ${
                            changeValue > 0 ? "text-green-600" : "text-red-500"
                          }`}
                        >
                          {" "}
                          {changeValue > 0 ? (
                            <MdOutlineArrowUpward size={20} />
                          ) : (
                            <MdArrowDownward size={20} />
                          )}
                          ({" "}
                          {changeValue > 0
                            ? `+${changeValue}%`
                            : `${changeValue}%`}{" "}
                          )
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <span
                          className={` relative inline-block w-[10px] h-[10px] ${
                            changeValue > 0 ? upDownColor.up : upDownColor.down
                          } text-black  rounded-full`}
                        ></span>{" "}
                        <span>{campaign.date}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className=" px-4 pb-4 md:pb-0">
              <button className="bg-[#5c6bc0]   hover:bg-[#5360ad] transition-all duration-200 font-medium text-white px-4 py-2 text-sm rounded-md flex gap-3 items-center">
                <PiFilePdf size={24} /> <span>View report</span>
              </button>
            </div>
          </div>
        </div>

        <table className="w-full text-nowrap ">
          <thead className="border-b  border-gray-400 ">
            <tr className="text-left text-textColor ">
              <th className="px-4 py-[14px] font-semibold text-sm">Campaign</th>
              <th className="px-4 py-[14px] font-semibold text-sm">Client</th>
              <th className="px-4 py-[14px] font-semibold text-sm">Changes</th>
              <th className="px-4 py-[14px] font-semibold text-sm">Budget</th>
              <th className="px-4 py-[14px] font-semibold text-sm">Status</th>
              <th className="px-4 py-[14px] text-right font-semibold text-sm">
                <PiDotsThreeBold size={20} />
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-borderColor ">
            <tr className="border-b border-borderColor bg-gray-100">
              <td colSpan="5" className="py-[14px]  px-4 text-sm text-gray-800">
                Today
              </td>

              <td className="text-right px-4 py-[14px]">
                <span
                  className="block text-right"
                  id="today-progress"
                  data-progress="30"
                >
                  <svg width="20" height="20">
                    <g transform="translate(10,10)">
                      <g className="progress-meter">
                        <path
                          d="M0,8A8,8 0 1,1 0,-8A8,8 0 1,1 0,8Z"
                          style={{
                            fill: "none",
                            stroke: "rgb(121, 134, 203)",
                            strokeWidth: "1.5",
                          }}
                        ></path>
                        <path
                          d="M4.898587196589413e-16,-8A8,8 0 0,1 7.608452130361228,2.472135954999579L0,0Z"
                          style={{ fill: "rgb(121, 134, 203)" }}
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </td>
            </tr>

            {todayData.map((item, index) => {
              const Icon = item.icon;
              const uniqueIndex = `today-${index}`;
              const isMenuOpen = openMenuIndex === uniqueIndex;
              return (
                <tr key={uniqueIndex} className="">
                  <td className="px-4 py-[6px]">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg`}>
                        <img src={Icon} className="w-9 h-9" />
                      </div>
                      <div className="space-y-[px]">
                        <a
                          href="#"
                          className="hover:text-blue-500 focus:text-blue-500 hover:cursor-pointer font-semibold text-textColor"
                        >
                          {item.name}
                        </a>
                        <div className="text-xs flex items-center gap-2">
                          <span
                            className={` relative inline-block w-[10px] h-[10px] ${
                              profileStatusColor[item.status]
                            } text-black  rounded-full`}
                          ></span>
                          <span>{item.timeRange}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-[6px] text-gray-600 ">
                    {item.platform}
                  </td>

                  <td className="px-4 py-[6px]">
                    <div className="flex gap-3 items-center space-x-1">
                      {item.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span
                        className={
                          item.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {item.percentage}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-[6px] font-semibold text-base text-textColor">
                    {item.amount}
                  </td>

                  <td className="px-4 py-[6px]">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                        statusColor[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="relative px-4 py-[6px] t">
                    <button
                      onClick={() =>
                        setOpenMenuIndex(isMenuOpen ? null : uniqueIndex)
                      }
                      ref={menuParentRef}
                      className=" text-textColor hover:text-blue-500 transition-all duration-200"
                    >
                      <BsList className="w-5 h-5 " />
                    </button>
                    {isMenuOpen && (
                      <div
                        ref={menuRef}
                        className="absolute top-[70%] right-[60%] min-w-[13.75rem] bg-white rounded-lg border-[1px] border-borderColor shadow-lg text-sm py-2 z-[60]"
                      >
                        {menuItems.map((item, index) => (
                          <div key={index}>
                            <a
                              href={item.link}
                              className={`w-full px-4 py-2 my-1  flex items-center justify-between  hover:bg-gray-100 `}
                            >
                              <div className="flex space-x-3 ">
                                <span className="text-gray-500">
                                  {item.icon}
                                </span>
                                <span className="text-gray-700">
                                  {item.text}
                                </span>
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
                  </td>
                </tr>
              );
            })}

            <tr className="border-b border-borderColor bg-gray-100">
              <td colSpan="5" className="py-[14px]  px-4 text-sm text-gray-800">
                Yesterday
              </td>

              <td className="text-right px-4 py-[14px]">
                <span
                  className="block text-right"
                  id="today-progress"
                  data-progress="30"
                >
                  <svg width="20" height="20">
                    <g transform="translate(10,10)">
                      <g className="progress-meter">
                        <path
                          d="M0,8A8,8 0 1,1 0,-8A8,8 0 1,1 0,8Z"
                          style={{
                            fill: "none",
                            stroke: "rgb(121, 134, 203)",
                            strokeWidth: "1.5",
                          }}
                        ></path>
                        <path
                          d="M4.898587196589413e-16,-8A8,8 0 0,1 7.608452130361228,2.472135954999579L0,0Z"
                          style={{ fill: "rgb(121, 134, 203)" }}
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </td>
            </tr>

            {yesterdayData.map((item, index) => {
              const Icon = item.icon;
              const uniqueIndex = `yesterday-${index}`;
              const isMenuOpen = openMenuIndex === uniqueIndex;
              return (
                <tr key={uniqueIndex} className="">
                  <td className="px-4 py-[6px]">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-lg`}>
                        <img src={Icon} className="w-9 h-9" />
                      </div>
                      <div className="space-y-[1px]">
                        <a
                          href="#"
                          className="hover:text-blue-500 focus:text-blue-500 hover:cursor-pointer font-semibold text-textColor"
                        >
                          {item.name}
                        </a>
                        <div className="text-xs flex items-center gap-2">
                          <span
                            className={` relative inline-block w-[10px] h-[10px] ${
                              profileStatusColor[item.status]
                            } text-black  rounded-full`}
                          ></span>
                          {item.timeRange}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-[6px] text-gray-600 ">
                    {item.platform}
                  </td>

                  <td className="px-4 py-[6px]">
                    <div className="flex gap-3 items-center space-x-1">
                      {item.trend === "up" ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span
                        className={
                          item.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {item.percentage}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-[6px] font-semibold text-base text-textColor">
                    {item.amount}
                  </td>

                  <td className="px-4 py-[6px]">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                        statusColor[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="relative px-4 py-[6px] t">
                    <button
                      onClick={() =>
                        setOpenMenuIndex(isMenuOpen ? null : uniqueIndex)
                      }
                      ref={menuParentRef}
                      className=" text-textColor hover:text-blue-500 transition-all duration-200"
                    >
                      <BsList className="w-5 h-5 " />
                    </button>
                    {isMenuOpen && (
                      <div
                        ref={menuRef}
                        className="absolute bottom-[70%] right-[60%] min-w-[13.75rem] bg-white rounded-lg border-[1px] border-borderColor shadow-lg text-sm py-2 z-[60]"
                      >
                        {menuItems.map((item, index) => (
                          <div key={index}>
                            <a
                              href={item.link}
                              className={`w-full px-4 py-2 my-1  flex items-center justify-between  hover:bg-gray-100 `}
                            >
                              <div className="flex space-x-3 ">
                                <span className="text-gray-500">
                                  {item.icon}
                                </span>
                                <span className="text-gray-700">
                                  {item.text}
                                </span>
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Marketing_Campaigns;
