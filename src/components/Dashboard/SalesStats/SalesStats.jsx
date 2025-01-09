import { useEffect, useState, useRef } from "react";
import { PiChartLine, PiGear, PiEraser, PiListBullets } from "react-icons/pi";
import { RxUpdate } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const applications = [
  {
    id: "1",
    name: "Sigma application",
    type: "New order",
    time: "06:28 pm",
    price: 49.9,
    image: "/assets/images/logo/1.svg",
    link: "#",
  },
  {
    id: "2",
    name: "Alpha application",
    type: "Renewal",
    time: "04:52 pm",
    price: 90.5,
    image: "/assets/images/logo/2.svg",
    link: "#",
  },
  {
    id: "3",
    name: "Delta application",
    type: "Support",
    time: "01:26 pm",
    price: 60.0,
    image: "/assets/images/logo/3.svg",
    link: "#",
  },
  {
    id: "4",
    name: "Omega application",
    type: "Support",
    time: "11:46 am",
    price: 55.0,
    image: "/assets/images/logo/4.svg",
    link: "#",
  },
  {
    id: "5",
    name: "Alpha application",
    type: "Renewal",
    time: "10:29 am",
    price: 90.5,
    image: "/assets/images/logo/2.svg",
    link: "#",
  },
];

const menuItems = [
  { icon: <RxUpdate size={20} />, text: "Update data", link: "#" },
  {
    icon: <PiListBullets size={20} />,
    text: "Detailed log",
    link: "#",
  },
  {
    icon: <PiChartLine size={20} />,
    text: "Statistics",
    link: "#",
    border: true,
  },
  {
    icon: <PiEraser size={20} />,
    text: "Clear list",

    link: "#",
  },
];

export default function SalesStats() {
  const totalSales = applications.reduce((sum, app) => sum + app.price, 0);
  const [isSettingOpen, setSettingIsOpen] = useState(false);
  const mcsRef = useRef(null);
  const mcsParentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mcsRef.current &&
        !mcsRef.current.contains(event.target) &&
        mcsParentRef.current &&
        !mcsParentRef.current.contains(event.target)
      ) {
        setSettingIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="w-full bg-white mx-auto border border-borderColor">
      <div className="border-b border-borderColor">
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Daily sales stats
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-emerald-600">
              $
              {totalSales.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>

            <div className="relative">
              <div
                ref={mcsParentRef}
                onClick={() => setSettingIsOpen(!isSettingOpen)}
                className="flex items-center gap-1 hover:cursor-pointer hover:text-blue-500 transition-all duration-200 focus:text-blue-500 text-gray-600"
              >
                <PiGear size={25} />
                <IoIosArrowDown size={18} />
              </div>

              {isSettingOpen && (
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
      </div>

      <div className="p-5 flex items-center justify-between border-b border-borderColor"></div>
      <div className="overflow-x-auto text-nowrap">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="text-left p-4 text-sm font-semibold text-textColor">
                Application
              </th>
              <th className="text-left p-4 text-sm font-semibold text-textColor">
                Time
              </th>
              <th className="text-left p-4 text-sm font-semibold text-textColor">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-b min-w-[100px] border-gray-200 last:border-b-0 text-nowrap"
              >
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <a href={app.link}>
                      <img src={app.image} className="w-9 h-9"></img>
                    </a>

                    <div className="min-w-0">
                      <div className="hover:text-blue-500 hover:cursor-pointer font-semibold text-sm text-gray-900 ">
                        {app.name}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {app.type}
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" text-gray-500 text-sm p-4 ">{app.time}</td>
                <td className="p-4 font-bold text-sm text-gray-900 ">
                  ${app.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
