import { ChevronRightIcon } from "lucide-react";

import { HiOutlineArrowRightCircle } from "react-icons/hi2";

export default function Apps({ isAppsOpen }) {
  const apps = [
    {
      img: "/assets/images/logo/1.svg",
      title: "Customer data platform",
      description: "Unify customer data from multiple sources",
    },
    {
      img: "/assets/images/logo/2.svg",
      title: "Data catalog",
      description: "Discover, inventory, and organize data assets",
    },
    {
      img: "/assets/images/logo/3.svg",
      title: "Data governance",
      description: "The collaboration hub and data marketplace",
    },
    {
      img: "/assets/images/logo/4.svg",
      title: "Data privacy",
      description: "Automated provisioning of non-production datasets",
    },
  ];

  return (
    <div
      className={`lg:w-[598px] absolute top-[112%] lg:right-0 left-[2%] lg:left-[-2000%] w-[96%]  bg-white z-[1000] rounded-lg border border-borderColor overflow-hidden shadow-lg`}
    >
      {/* Header Section */}
      <div className="px-6 py-5 flex justify-between items-center border-b border-borderColor">
        <h2 className="text-md font-semibold text-gray-900">Browse apps</h2>
        <a
          href="#"
          className="flex items-center text-blue-500 hover:text-blue-600  mt-1 text-sm"
        >
          View all{" "}
          <span className=" ml-4 text-xl">
            <HiOutlineArrowRightCircle />
          </span>
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2">
        {apps.map((app, index) => (
          <div
            key={index}
            className={`
              p-6 bg-white transition-all duration-200 cursor-pointer hover:bg-gray-100
              ${index % 2 === 0 ? "border-r border-borderColor" : ""}
              ${index < 2 ? "border-b border-borderColor" : ""}
            `}
          >
            <div className="mb-4 w-10 h-10">
              <img src={`${app.img}`} alt="logo" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              {app.title}
            </h3>
            <p className="text-gray-600 text-sm">{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
