import React, { useState, useRef, useEffect } from "react";
import { Settings2, RotateCw } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import {
  PiDotsThreeBold,
  PiChartLine,
  PiPencil,
  PiLockKey,
  PiGear,
  PiFilePdf,
  PiEraser,
  PiListBullets,
} from "react-icons/pi";
import { RxUpdate } from "react-icons/rx";
import { BsList } from "react-icons/bs";
import { MdOutlineArrowUpward, MdArrowDownward } from "react-icons/md";
// Create an object to hold stats data
const statData = {
  members: {
    current: 3450,
    avg: 489,
    change: 53.6,
    history: Array(30)
      .fill(0)
      .map(() => Math.random() * 100),
  },
  serverLoad: {
    current: 49.4,
    avg: 34.6,
    history: Array(6)
      .fill(0)
      .map(() => Math.random() * 100),
  },
  revenue: {
    current: 18390,
    avg: 37578,
    history: Array(6)
      .fill(0)
      .map(() => Math.random() * 100),
  },
};

const marketMenuItems = [
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

// Mini bar chart component
const MiniBarChart = ({ data }) => (
  <div className="flex justify-center h-[50px]  mt-2">
    <div className="flex items-end gap-1">
      {data.map((value, i) => (
        <div
          key={i}
          className="w-2 bg-white/30 rounded-sm transition-all duration-500"
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  </div>
);

// Mini line chart component
const MiniLineChart = ({ data }) => {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  const normalizedPoints = data
    .map((value, index) => {
      const x = (index * 200) / (data.length - 1);
      const y = 100 - ((value - minValue) / range) * 70 - 15;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="flex items-center h-12 gap-2 mt-2">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <polyline
          points={normalizedPoints}
          className="stroke-white/50  fill-none"
        />
        <g className="fill-white">
          {data.map((_, i) => {
            const [x, y] = normalizedPoints.split(" ")[i].split(",");
            return <circle key={i} cx={x} cy={y} r="2" />;
          })}
        </g>
      </svg>
    </div>
  );
};

function ThreeCharts() {
  const [stats, setStats] = useState({ ...statData });
  const [
    isMarketing_Campaigns_settingOpen,
    setMarketing_Campaigns_settingIsOpen,
  ] = useState(false);

  const menuParentRef = useRef(null);
  const mcsRef = useRef(null);
  const mcsParentRef = useRef(null);

  const formatNumber = (num) => new Intl.NumberFormat().format(Math.round(num));
  const formatCurrency = (num) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(num);

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <div className=" bg-gray-100 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {/* Members Online Card */}
        <div className="bg-[#26a69a] text-white  shadow-md">
          <div className="flex justify-between items-start p-6">
            <div>
              <div className="text-2xl font-semibold">
                {formatNumber(stats.members.current)}
              </div>
              <div className="text-sm text-emerald-100">Members online</div>
              <div className="text-sm text-emerald-200 mt-1">
                {formatNumber(stats.members.avg)} avg
              </div>
            </div>
            <span className="text-white bg-green-900 px-2 py-1 rounded-full text-xs font-semibold">
              +{stats.members.change.toFixed(1)}%
            </span>
          </div>
          <MiniBarChart data={stats.members.history} />
        </div>

        {/* Server Load Card */}
        <div className="bg-[#f35c86] text-white  shadow-sm">
          <div className="flex p-6 justify-between items-start">
            <div>
              <div className="text-2xl font-semibold">
                {stats.serverLoad.current.toFixed(1)}%
              </div>
              <div className="text-sm text-pink-100">Current server load</div>
              <div className="text-sm text-pink-200 mt-1">
                {stats.serverLoad.avg}% avg
              </div>
            </div>
            <div className="relative">
              <div
                ref={mcsParentRef}
                onClick={() =>
                  setMarketing_Campaigns_settingIsOpen(
                    !isMarketing_Campaigns_settingOpen
                  )
                }
                className="flex items-center gap-1 hover:cursor-pointer hover:text-white-500 transition-all duration-200 focus:text-blue-500 text-white-600"
              >
                <PiGear size={25} />
                <IoIosArrowDown size={18} />
              </div>

              {isMarketing_Campaigns_settingOpen && (
                <div
                  ref={mcsRef}
                  className="absolute top-[110%] right-[8%] min-w-[13.75rem] bg-white rounded-lg border-[1px] border-borderColor shadow-lg text-sm py-2 z-[60]"
                >
                  {marketMenuItems.map((item, index) => (
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
          <div className="w-full bg-pink-400/30 h-2 rounded-full mt-8">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${stats.serverLoad.current}%` }}
            />
          </div>
        </div>

        {/* Revenue Card */}
        <div className="bg-blue-500 text-white  shadow-sm">
          <div className="flex p-6 justify-between items-start">
            <div>
              <div className="text-2xl font-semibold">
                {formatCurrency(stats.revenue.current)}
              </div>
              <div className="text-blue-50 text-sm">Today's revenue</div>
              <div className="text-sm text-blue-200 mt-1">
                {formatCurrency(stats.revenue.avg)} avg
              </div>
            </div>
            <button className="text-blue-100 hover:text-white transition-colors">
              <RotateCw size={20} />
            </button>
          </div>
          <MiniLineChart data={stats.revenue.history} />
        </div>
      </div>
    </div>
  );
}

export default ThreeCharts;
