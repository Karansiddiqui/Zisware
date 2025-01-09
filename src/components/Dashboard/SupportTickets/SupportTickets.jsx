import React, { useState, useRef, useEffect } from "react";
import { Check, CheckCheck, X } from "lucide-react";
import { BsList } from "react-icons/bs";
import {
  PiDotsThreeBold,
  PiFilePdf,
  PiFolderOpenLight,
  PiArrowArcLeft,
} from "react-icons/pi";
import {
  MdOutlineArrowUpward,
  MdArrowDownward,
  MdHistory,
} from "react-icons/md";

const tickets = [
  {
    id: "#1183",
    hours: 12,
    user: {
      name: "Annabelle Doney",
      initials: "AD",
    },
    priority: "Blocker",
    title: "Workaround for OS X selects printing bug",
    description:
      "Chrome fixed the bug several versions ago, thus rendering this...",
    status: "active",
  },
  {
    id: "#1183",
    hours: 12,
    user: {
      name: "Annabelle Doney",
      initials: "AD",
    },
    priority: "Blocker",
    title: "Workaround for OS X selects printing bug",
    description:
      "Chrome fixed the bug several versions ago, thus rendering this...",
    status: "active",
  },

  {
    id: "#1249",
    hours: 16,
    user: {
      name: "Chris Macintyre",
      initials: "CM",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces",
    },
    priority: "Medium",
    title: "Vertically center carousel controls",
    description:
      "Try any carousel control and reduce the screen width below ousel control and reduce the screen width below ousel control and reduce the screen width below ",
    status: "active",
  },
  {
    id: "#1249",
    hours: 16,
    user: {
      name: "Chris Macintyre",
      initials: "CM",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces",
    },
    priority: "Medium",
    title: "Vertically center carousel controls",
    description:
      "Try any carousel control and reduce the screen width below...",
    status: "active",
  },
  {
    id: "#1254",
    hours: 20,
    user: {
      name: "Robert Hauber",
      initials: "RH",
    },
    priority: "Medium",
    title: "Inaccurate small pagination height",
    description: "The height of pagination elements is not consistent with...",
    status: "active",
  },
  {
    id: "#1046",
    hours: 8,
    user: {
      name: "Alan Macedo",
      initials: "AM",
    },
    priority: "Blocker",
    title: "Avoid some unnecessary HTML string",
    description: "Rather than building a string of HTML and then parsing it...",
    status: "resolved",
  },
  {
    id: "#1038",
    hours: 4,
    user: {
      name: "Brett Castellano",
      initials: "BC",
    },
    priority: "Low",
    title: "Update json configuration",
    description:
      "The files property is necessary to override the files property...",
    status: "resolved",
  },
  {
    id: "#1034",
    hours: 6,
    user: {
      name: "Roxanne Forbes",
      initials: "RF",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=faces",
    },
    priority: "Low",
    title: "Tooltip multiple event",
    description: "Fix behavior when using tooltips and popovers that are...",
    status: "resolved",
  },
  {
    id: "#1040",
    hours: 10,
    user: {
      name: "Mitchell Sitkin",
      initials: "MS",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=faces",
    },
    priority: "High",
    title: "Account for static form controls in form group",
    description:
      "Resizes control label's font-size and account for the standard...",
    status: "closed",
  },
  {
    id: "#1038",
    hours: 12,
    user: {
      name: "Katleen Jensen",
      initials: "KJ",
    },
    priority: "Medium",
    title: "Proper sizing of form control feedback",
    description: "Feedback icon sizing inside a larger/smaller form-group...",
    status: "closed",
  },
];

const upDownColor = {
  up: "bg-green-600",
  down: "bg-red-600",
};

const campaignsData = [
  {
    value: "14,327",
    change: "16.2",
    date: "May 12, 12:30 am",
    icon: "🟣",
  },
  {
    value: "1,132",
    color: "text-blue-600 bg-blue-200",
    descripyion: "total ticktes",
    icon: <PiFolderOpenLight size={20} />,
    link: "#",
  },
  {
    value: "06:25:00",
    color: "text-blue-600 bg-blue-200",
    descripyion: "response time",
    icon: <PiArrowArcLeft size={20} />,
    link: "#",
  },
];

const dateRanges = [
  "June, 29 - July, 5",
  "June, 22 - June, 28",
  "June, 15 - June, 21",
  "June, 8 - June, 14",
];

const menuItems = [
  { icon: <PiArrowArcLeft size={20} />, text: "Quick reply", link: "#" },
  {
    icon: <MdHistory size={20} />,
    text: "Full history",
    link: "#",
    border: true,
  },
  {
    icon: <CheckCheck size={20} className="text-green-600" />,
    text: "Resolve issue",
    link: "#",
  },
  {
    icon: <X size={20} className="text-red-600" />,
    text: "Close issue",

    link: "#",
  },
];

function getPriorityColor(priority) {
  switch (priority) {
    case "Blocker":
      return " bg-red-500";
    case "High":
      return " bg-orange-400";
    case "Medium":
      return " bg-blue-500";
    case "Low":
      return " bg-green-600";
    default:
      return " bg-gray-600";
  }
}

function getInitialsColor(name) {
  const colors = [
    "bg-emerald-500",
    "bg-blue-500",
    "bg-red-500",
    "bg-orange-500",
  ];
  const index = name.length % colors.length;
  return colors[index];
}

function TicketTableHeader() {
  return (
    <thead className="border-b border-gray-400">
      <tr className="text-left text-textColor">
        <th className="px-4 py-[14px] font-semibold text-sm text-center">
          Due
        </th>
        <th className="px-4 py-[14px] font-semibold text-sm">User</th>
        <th className="px-4 py-[14px] font-semibold text-sm">Description</th>
        <th className="px-4 py-[14px] font-semibold text-sm">
          <PiDotsThreeBold size={20} />
        </th>
      </tr>
    </thead>
  );
}

function TicketSection({ title, tickets, count }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRef = useRef(null);
  const menuParentRef = useRef(null);

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
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="bg-gray-100 p-4 flex justify-between items-center border-b border-t border-borderColor">
        <h2 className="text-base text-textColor">{title}</h2>
        <span
          className={`text-white text-sm font-medium px-2.5 py-0.5 rounded-full mr-7 ${
            title === "Active tickets"
              ? "bg-blue-500"
              : title === "Resolved tickets"
              ? "bg-emerald-500"
              : "bg-red-500"
          }`}
        >
          {count}
        </span>
      </div>

      <div className="max-h-[340px] overflow-scroll">
        <table className="w-full text-nowrap">
          <TicketTableHeader />
          <tbody className="divide-y divide-gray-200">
            {tickets.map((ticket, index) => {
              const uniqueIndex = `today-${index}`;
              const isMenuOpen = openMenuIndex === uniqueIndex;
              const wordLimit = 10;
              const words = ticket.description.split(" ");
              const truncatedText =
                words.slice(0, wordLimit).join(" ") +
                (words.length > wordLimit ? "..." : "");

              return (
                <tr key={index}>
                  <td className="py-4 pl-4 pr-3 w-20">
                    <div className="flex flex-col items-center text-gray-500">
                      {ticket.status === "active" && (
                        <span className="font-semibold text-textColor">
                          {ticket.hours}
                        </span>
                      )}
                      {ticket.status === "resolved" ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : ticket.status === "closed" ? (
                        <CheckCheck className="w-4 h-4 text-red-500" />
                      ) : ticket.hours > 1 ? (
                        "hours"
                      ) : (
                        "hour"
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-4 w-48">
                    <div className="flex items-center gap-3">
                      {ticket.user.avatar ? (
                        <img
                          src={ticket.user.avatar}
                          alt={ticket.user.name}
                          className="w-[40px] h-[40px] rounded-full"
                        />
                      ) : (
                        <div
                          className={`w-[40px] h-[40px] rounded-full ${getInitialsColor(
                            ticket.user.name
                          )} flex items-center justify-center text-white font-medium`}
                        >
                          {ticket.user.initials}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-textColor hover:text-blue-500 transition-all duration-200">
                          {ticket.user.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">{truncatedText}</td>
                  <td className="px-3 py-4">...</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SupportTickets() {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("June, 15 - June, 21");
  const activeTickets = tickets.filter((t) => t.status === "active");
  const resolvedTickets = tickets.filter((t) => t.status === "resolved");
  const closedTickets = tickets.filter((t) => t.status === "closed");
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
        <div className="bg-white border-borderColor ">
          <div className="flex justify-between items-center border-b p-4 border-borderColor px-4 ">
            <h2 className="text-xl text-textColor font-semibold">
              Support tickets
            </h2>

            <div className="flex items-center gap-6">
              <div className="relative w-[180px]">
                <button
                  onClick={() => setIsDateOpen(!isDateOpen)}
                  className="flex h-10 w-full items-center justify-between  border border-borderColor bg-background px-3 py-2 text-sm ring-offset-background"
                >
                  <span>{selectedDate}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 opacity-50 transition-transform ${
                      isDateOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                {isDateOpen && (
                  <div className="absolute top-full left-0 z-50 mt-1 w-full rounded-md border bg-popover shadow-md bg-white">
                    <div className="py-1">
                      {dateRanges.map((date) => (
                        <button
                          key={date}
                          className={`w-full rounded-sm px-3 py-2 text-sm text-left transition-colors hover:bg-gray-100 hover:text-accent-foreground ${
                            selectedDate === date
                              ? "bg-accent text-accent-foreground"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedDate(date);
                            setIsDateOpen(false);
                          }}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap lg:flex-row justify-between lg:items-center xl:gap-4">
            {campaignsData.map((campaign, index) => {
              const changeValue = parseFloat(campaign.change) || null;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-md"
                >
                  <div className="flex items-center justify-center gap-3 xl:gap-4">
                    {campaign.icon && (
                      <a
                        href={campaign.link}
                        className={`p-2 ${campaign.color} rounded-full flex items-center justify-center`}
                      >
                        {campaign.icon || "🔵"}
                      </a>
                    )}

                    <div className="flex flex-col ">
                      <div className="flex items-center text-textColor xl:gap-4">
                        <h3 className="text-lg  font-semibold">
                          {campaign.value}
                        </h3>

                        {changeValue && (
                          <p
                            className={`text-base flex items-center gap-1 ${
                              changeValue > 0
                                ? "text-green-600"
                                : "text-red-500"
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
                        )}
                      </div>
                      {campaign.descripyion && (
                        <p className="text-gray-500">{campaign.descripyion}</p>
                      )}
                      {changeValue && (
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <span
                            className={` relative inline-block w-[10px] h-[10px] ${
                              changeValue > 0
                                ? upDownColor.up
                                : upDownColor.down
                            } text-black  rounded-full`}
                          ></span>{" "}
                          <span>{campaign.date}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className=" px-4 pb-4 ">
              <button className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 border border-borderColor text-textColor px-4 py-2 text-sm rounded-md flex gap-3 items-center">
                <PiFilePdf size={24} /> <span>Report</span>
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" bg-white">
            <div className="">
              <TicketSection
                title="Active tickets"
                tickets={activeTickets}
                count={activeTickets.length}
              />
              <TicketSection
                title="Resolved tickets"
                tickets={resolvedTickets}
                count={resolvedTickets.length}
                showStatus={true}
              />
              <TicketSection
                title="Closed tickets"
                tickets={closedTickets}
                count={closedTickets.length}
                showStatus={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportTickets;
