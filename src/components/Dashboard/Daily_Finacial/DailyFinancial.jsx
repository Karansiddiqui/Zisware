import React, { useState } from "react";
import {
  PiChartLine,
  PiCheck,
  PiUsers,
  PiArrowCounterClockwise,
  PiArrowBendDoubleUpRight,
} from "react-icons/pi";
const financials = [
  {
    icon: <PiChartLine size={20} />,
    iconColor: "text-red-400",
    iconBg: "bg-red-50",
    content: (
      <span className="">
        Stats for July, 6: <span className="font-semibold">1938</span> orders,
        $4220 revenue
      </span>
    ),
    time: "2 hours ago",
  },
  {
    icon: <PiCheck size={20} />,
    iconColor: "text-green-700",
    iconBg: "bg-green-100",
    content: (
      <>
        Invoices{" "}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          #4732
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          #4734
        </a>{" "}
        have been paid
      </>
    ),
    time: "Dec 18, 18:36",
  },
  {
    icon: <PiUsers size={20} />,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
    content: "Affiliate commission for June has been paid",
    time: "36 minutes ago",
  },
  {
    icon: <PiArrowCounterClockwise size={20} />,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100",
    content: (
      <>
        Order{" "}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          #37745
        </a>{" "}
        from July, 1st has been refunded
      </>
    ),
    time: "4 minutes ago",
  },
  {
    icon: <PiArrowBendDoubleUpRight size={20} />,
    iconColor: "text-green-700",
    iconBg: "bg-green-100",
    content: (
      <>
        Invoice{" "}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          #4769
        </a>{" "}
        has been sent to{" "}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          Robert Smith
        </a>
      </>
    ),
    time: "Dec 12, 05:46",
  },
];

export default function DailyFinancials() {
  const [isLiveUpdate, setIsLiveUpdate] = useState(true);

  return (
    <div className="w-full mx-auto  bg-white border border-borderColor">
      <div className="flex justify-between p-4 items-center mb-4 border-b border-borderColor">
        <h1 className="text-xl font-medium">Daily financials</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Realtime</span>
          <button
            onClick={() => setIsLiveUpdate(!isLiveUpdate)}
            className={`relative inline-flex items-center h-5 w-10 rounded-full transition-colors focus:outline-none ${
              isLiveUpdate ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-3 w-3 rounded-full bg-white transform transition-transform ${
                isLiveUpdate ? "translate-x-6" : "translate-x-1"
              }`}
            ></span>
          </button>
        </div>
      </div>

      <div className=" text-nowrap overflow-auto">
        <table>
          <tbody>
            {financials.map((item, index) => (
              <tr key={index} className="">
                <td className="flex gap-4 p-4">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${item.iconBg} ${item.iconColor}`}
                  >
                    {item.icon}
                  </div>
                  <div className="">
                    <div className="text-sm">{item.content}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.time}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
