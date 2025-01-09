import { React, useState, useRef, useEffect } from "react";
import {
  User,
  CreditCard,
  ShoppingCart,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";
import { CiSearch } from "react-icons/ci";
import { LiaAngleDownSolid } from "react-icons/lia";
import { PiFadersHorizontalThin, PiSquaresFour } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { PiUserCircleThin } from "react-icons/pi";
import { PiBriefcaseLight } from "react-icons/pi";
import { PiBell } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import NotificationPanel from "./Notification/Notification.jsx";
import { useSidebar } from "../../utils/context/SidebarProvider.jsx";
import Apps from "./Apps/Apps.jsx";

export function Header() {
  const [isSmallScreenSearchOpen, setSmallScreenSearchOpen] = useState(false);

  const {
    isLocked,
    isMenuOpen,
    setMenuIsOpen,
    isNotificationOpen,
    setIsNotificationOpen,
  } = useSidebar();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setProfileIsOpen] = useState(false);
  const [isAppsOpen, setAppsIsOpen] = useState(false);
  const filterRef = useRef(null);
  const searchRef = useRef(null);
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const appsRef = useRef(null);
  const profileParenteRef = useRef(null);
  const filterParenteRef = useRef(null);
  const searchParenteRef = useRef(null);
  const appsParentRef = useRef(null);

  const toggleNotfication = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleModalToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSmallScreenSearch = () => {
    setSmallScreenSearchOpen((prev) => !prev);
  };

  const [checkboxes, setCheckboxes] = useState({
    invoices: true,
    files: false,
    users: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target) &&
        filterParenteRef.current &&
        !filterParenteRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchParenteRef.current &&
        !searchParenteRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        profileParenteRef.current &&
        !profileParenteRef.current.contains(event.target)
      ) {
        setProfileIsOpen(false);
      }
      if (
        appsRef.current &&
        !appsRef.current.contains(event.target) &&
        appsParentRef.current &&
        !appsParentRef.current.contains(event.target)
      ) {
        setAppsIsOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 992) {
        setSmallScreenSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const contacts = [
    {
      name: "Christine Johnson",
      email: "c.johnson@awesomecorp.com",
      avatar: "/assets/images/users/face3.jpg",
      status: "offline",
    },
    {
      name: "Clinton Sparks",
      email: "c.sparks@awesomecorp.com",
      avatar: "/assets/images/users/face24.jpg",
      status: "online",
    },
  ];

  const clients = [
    {
      name: "Adobe Inc.",
      license: "Enterprise license",
      logo: "/assets/images/brands/adobe.svg",
    },
    {
      name: "Holiday-Inn",
      license: "On-premise license",
      logo: "/assets/images/brands/holiday-inn.svg",
    },
    {
      name: "ING Group",
      license: "Perpetual license",
      logo: "/assets/images/brands/ing.svg",
    },
  ];
  const menuItems = [
    { icon: <User size={20} />, text: "My profile", link: "#" },
    { icon: <CreditCard size={20} />, text: "My subscription", link: "#" },
    { icon: <ShoppingCart size={20} />, text: "My orders", link: "#" },
    {
      icon: <Mail size={20} />,
      text: "My inbox",
      badge: "26",
      border: true,
      link: "#",
    },
    { icon: <Settings size={20} />, text: "Account settings", link: "#" },
    { icon: <LogOut size={20} />, text: "Logout", link: "#" },
  ];

  return (
    <header
      className={` fixed py-[10.5px] bg-white border-b flex items-center justify-between px-5 shadow z-[999] transition-all duration-200  ${
        isLocked
          ? "w-full lg:w-[calc(100%-3.75rem)] "
          : "w-full lg:w-[calc(100%-15.25rem)]"
      }`}
    >
      <div
        className={`lg:relative flex items-center justify-between w-full gap-2 lg:gap-0 flex-wrap lg:flex-nowrap transition-all duration-200`}
      >
        <button
          className="lg:hidden ml-2"
          onClick={() => setMenuIsOpen((prev) => !prev)}
        >
          <RxHamburgerMenu size={20} />
        </button>
        {/* search */}
        <div
          className={`relative lg:block lg:min-w-[30rem] transition-all duration-200 ${
            isSmallScreenSearchOpen ? "block order-1 basis-[100%]" : "hidden "
          }`}
        >
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 "
            size={21}
          />
          <input
            type="text"
            placeholder="Search"
            className="pl-12 pr-4 py-[9px] text-sm border border-borderColor focus:outline-none focus:ring-1 focus:ring-blue-300 w-full"
            onClick={handleSearchToggle}
            ref={searchParenteRef}
          />
          <div
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 scale-x-[-1]  font-bold hover:cursor-pointer py-1 px-2 ${
              isFilterOpen ? "bg-blue-100" : "bg-gray-100"
            }`}
            onClick={handleModalToggle}
            ref={filterParenteRef}
          >
            <PiFadersHorizontalThin className="" size={20} />
          </div>

          {/* filter */}
          {isFilterOpen && (
            <div
              ref={filterRef} // Attach ref to the modal
              className="absolute top-[105%] rounded-md left-0 right-0 w-full shadow-lg border border-borderColor z-50"
            >
              <div className="bg-white rounded-md p-5 flex flex-col gap-5 border-borderColor ">
                <div className="flex justify-between items-center ">
                  <h2 className="text-medium font-medium">Search options</h2>
                  <VscHistory size={18} />
                </div>

                {/* Category Section */}
                <div className="text-sm">
                  <h3 className="mb-2">Category</h3>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="invoices"
                        checked={checkboxes.invoices}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 bg-blue-600 mr-2 rounded border-gray-300 focus:ring-blue-500 checked:bg-blue-500"
                      />
                      Invoices
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="files"
                        checked={checkboxes.files}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 bg-blue-600 mr-2 rounded border-gray-300 focus:ring-blue-500 checked:bg-blue-500"
                      />
                      Files
                    </label>

                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="users"
                        checked={checkboxes.users}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 bg-blue-600 mr-2 rounded border-gray-300 focus:ring-blue-500 checked:bg-blue-500"
                      />
                      Users
                    </label>
                  </div>
                </div>

                {/* Additional Sections */}
                <div className="text-sm">
                  <h3 className="mb-2">Addition</h3>
                  <div className="flex items-center">
                    <div className="relative w-fit">
                      <select className="border border-borderColor p-[9.5px] pl-4 pr-9 border-r-0 focus:outline-blue-300 appearance-none">
                        <option value="has">has</option>
                        <option value="has not">has not</option>
                      </select>
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none font-extrabold">
                        <LiaAngleDownSolid size={13} />{" "}
                      </span>
                    </div>

                    <input
                      type="text"
                      placeholder="Enter the word(s)"
                      className="border border-borderColor p-[9px] flex-1 focus:outline-blue-300"
                    />
                  </div>
                </div>

                {/* Status Section */}
                <div className="text-sm">
                  <h3 className="font-medium mb-2">Status</h3>
                  <div className="flex items-center">
                    <div className="relative w-fit">
                      <select className="border border-borderColor p-[9.5px] pl-4 pr-9 border-r-0 focus:outline-blue-300 appearance-none">
                        <option value="is">is</option>
                        <option value="is not">is not</option>
                      </select>
                      <span className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none font-extrabold">
                        <LiaAngleDownSolid size={13} />{" "}
                      </span>
                    </div>
                    <div className="relative w-full">
                      <select className="appearance-none w-full focus:outline-blue-300 border border-borderColor p-[9.5px] pr-8">
                        <option value="active">Active</option>
                        <option value="inActive">Inactive</option>
                        <option value="New">New</option>
                        <option value="Expired">Expired</option>
                        <option value="Pending">Pending</option>
                      </select>
                      <span className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none font-extrabold">
                        <LiaAngleDownSolid size={13} />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between text-sm">
                  <button
                    className="px-4 py-[9px] bg-gray-100 hover:bg-gray-200 rounded-md border-[1px] border-borderColor"
                    onClick={handleModalToggle}
                  >
                    Reset
                  </button>
                  <div className="space-x-4">
                    <button
                      className="px-4 py-[9px] bg-gray-100 hover:bg-gray-200 rounded-md border-[1px] border-borderColor"
                      onClick={handleModalToggle}
                    >
                      Cancel
                    </button>
                    <button className="px-4 py-[9px] bg-blue-500 hover:bg-blue-600 text-white rounded-md border-[1px] border-borderColor">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* search */}
          {isSearchOpen && (
            <div
              ref={searchRef}
              className="absolute top-[105%] left-0 right-0 w-full shadow-lg border-[1px] rounded-md  border-borderColor z-50"
            >
              <div className=" bg-white rounded-md">
                <div className="relative text-sm  border-borderColor border-b-[1px]  py-2 hover:cursor-pointer">
                  <div className="flex items-center px-6 py-2 hover:bg-gray-100">
                    <CiSearch size={21} />
                    <div className="pl-6">
                      Search <b>"in"</b> everywhere
                    </div>
                  </div>
                </div>

                <div className="py-3">
                  <div className="border-b-[1px] pb-3">
                    <div className="flex justify-between items-center py-2 text-sm px-5">
                      <h2 className="font-light text-gray-400">Contacts</h2>
                      <a
                        href="#"
                        className="flex items-center text-blue-500 hover:text-blue-700  mt-1"
                      >
                        See all{" "}
                        <span className=" ml-3 text-xl">
                          <HiOutlineArrowRightCircle />
                        </span>
                      </a>
                    </div>

                    <div className="space-y-1">
                      {contacts.map((contact) => (
                        <div
                          key={contact.email}
                          className="flex items-center justify-between hover:bg-gray-100 px-5 py-2 text-textColor hover:cursor-pointer"
                        >
                          <div className="flex items-center  justify-between w-full">
                            <div className="relative flex items-center gap-5">
                              <div className="rounded-full">
                                <img
                                  src={contact.avatar}
                                  alt={contact.name}
                                  className="w-8 h-8 rounded-full"
                                />
                              </div>

                              <div className="space-y-[2px]">
                                <p className="font-semibold text-sm">
                                  {contact.name}
                                </p>
                                <p className="text-xs font-light text-muted-foreground">
                                  {contact.email}
                                </p>
                              </div>
                            </div>
                            <PiUserCircleThin size={20} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="">
                    <div className="flex justify-between items-center py-2 text-sm px-5">
                      <h2 className="font-light text-gray-400">Clients</h2>
                      <a
                        href="#"
                        className="flex items-center text-blue-500 hover:text-blue-700  mt-1"
                      >
                        See all{" "}
                        <span className=" ml-3 text-xl">
                          <HiOutlineArrowRightCircle />
                        </span>
                      </a>
                    </div>

                    <div className="space-y-1">
                      {clients.map((client) => (
                        <div
                          key={client.name}
                          className="flex items-center justify-between hover:bg-gray-100 px-5 py-2 text-textColor hover:cursor-pointer"
                        >
                          <div className="flex items-center  justify-between w-full">
                            <div className="relative flex items-center gap-5">
                              <div className="rounded-full">
                                <img
                                  src={client.logo}
                                  alt={client.name}
                                  className="w-8 h-8 rounded-full"
                                />
                              </div>

                              <div className="space-y-[2px]">
                                <p className="font-semibold text-sm">
                                  {client.name}
                                </p>
                                <p className="text-xs font-light text-muted-foreground">
                                  {client.license}
                                </p>
                              </div>
                            </div>
                            <PiBriefcaseLight size={20} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=" flex items-center space-x-4 mr-3">
          <div
            className={`flex -mr-2 items-center space-x-4 ml-3 lg:hidden p-2 ${
              isSmallScreenSearchOpen &&
              "bg-blue-100 text-blue-500 rounded-full "
            }`}
            onClick={handleSmallScreenSearch}
          >
            <CiSearch size={21} />
          </div>

          {/* apps */}
          <div
            onClick={() => setAppsIsOpen(!isAppsOpen)}
            className="lg:relative transition-all duration-200"
          >
            <div
              ref={appsParentRef}
              className={`text-gray-600  hover:cursor-pointer relative transition-all duration-200 -mr-2  ${
                isAppsOpen ? "bg-blue-100" : "hover:bg-gray-100"
              }  p-2 rounded-full `}
            >
              <PiSquaresFour
                size={20}
                className={`${isAppsOpen && "text-blue-600"}`}
              />
            </div>
            <div ref={appsRef}>
              {isAppsOpen && <Apps isAppsOpen={isAppsOpen} />}
            </div>
          </div>

          {/* notification */}
          <button
            className="relative p-2 hover:bg-gray-100 rounded-full"
            onClick={toggleNotfication}
          >
            <PiBell size={20} className="text-gray-600" />

            <span className="absolute -top-[7px] -right-[10px] text-xs font-semibold px-[0.4375rem] py-[0.3125rem] leading-none bg-amber-300 rounded-full">
              2
            </span>
          </button>
          <div ref={notificationRef}>
            <NotificationPanel
              isNotificationOpen={isNotificationOpen}
              setIsNotificationOpen={setIsNotificationOpen}
            />
          </div>

          {/* profile */}
          <div
            ref={profileParenteRef}
            className={`relative flex items-center space-x-2 ${
              isProfileOpen && "bg-blue-100"
            } p-1 rounded-full cursor-pointer`}
            onClick={() => setProfileIsOpen(!isProfileOpen)}
          >
            <div className="relative w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src="/assets/images/users/face11.jpg"
                alt="face"
                className=" rounded-full"
              />

              <span
                className={`absolute bottom-[-2px] right-[-2px] p-[.3125rem] rounded-full border-[2.5px] border-white bg-green-600`}
              ></span>
            </div>
            <span className="text-sm pr-2 hidden lg:block">Victoria</span>

            {isProfileOpen && (
              <div
                ref={profileRef}
                className="absolute top-[110%] right-0 min-w-[13.75rem] bg-white rounded-lg border-[1px] border-borderColor shadow-lg text-sm py-2 z-50"
              >
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href={item.link}
                      className={`w-full px-4 py-2 my-1  flex items-center justify-between  hover:bg-gray-50 `}
                    >
                      <div className="flex space-x-3">
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
    </header>
  );
}
