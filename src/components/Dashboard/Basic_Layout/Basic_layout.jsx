import React, { useState } from "react";
import { User, Lock, X, Send, ChevronDown } from "lucide-react";
import { PiSlackLogo, PiTelegramLogoLight, PiXLogo } from "react-icons/pi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function BasicLayout() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    state: "",
    gender: "Male",
    image: "",
    tags: [],
    message: "",
  });
  const [selectedTags, setSelectedTags] = useState([
    { label: "Slack", icon: <PiSlackLogo /> },
    { label: "Instagram", icon: <FaInstagram /> },
  ]);
  const [showTagsDropdown, setShowTagsDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Alaska");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const states = [
    {
      timeZone: "Alaskan/Hawaiian Time Zone",
      states: ["Alaska", " Hawaii"],
    },
    {
      timeZone: "Pacific Time Zone",
      states: ["California", " Navada", "Washington"],
    },
    {
      timeZone: "Mountain Time Zone",
      states: ["Arizona", " Colorado", "Wyoming"],
    },
    {
      timeZone: "Central Time Zone",

      states: ["Alabama", " Arkansas", "Kentucky"],
    },
    {
      timeZone: "Eastern Time Zone",

      states: ["Connecticut", "Delaware", "Florida"],
    },
  ];

  const availableTags = [
    {
      label: "Slack",
      icon: <PiSlackLogo />,
    },
    {
      label: "Instagram",
      icon: <FaInstagram />,
    },
    {
      label: "X (Twitter)",
      icon: <PiXLogo />,
    },
    {
      label: "Telegram",
      icon: <PiTelegramLogoLight />,
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp />,
    },
  ];

  const handleTagSelect = (tag) => {
    // Check if the tag is already in the selectedTags array
    if (selectedTags.includes(tag)) {
      // If the tag is already selected, remove it
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      // If the tag is not selected, add it
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Inside the component
  const [fileName, setFileName] = useState("");

  // Function to handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const removeTag = (tagToRemove) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, tags: selectedTags });
  };

  return (
    <div className="">
      <div className="mx-auto bg-white border-[1px] border-borderColor ">
        <h1 className="text-lg font-semibold text-gray-900 border-b px-6 py-4 border-borderColor">
          Basic layout
        </h1>
        <p className="text-sm text-gray-900 border-b px-6 py-4 border-borderColor">
          Create horizontal forms with the grid by adding the{" "}
          <span className="text-red-500 text-xs bg-gray-100 px-1 rounded-md">
            .row
          </span>{" "}
          class to form groups and using the{" "}
          <span className="text-red-500 text-xs bg-gray-100 px-1 rounded-md">
            .col-*-*
          </span>{" "}
          classes to specify the width of your labels and controls. Be sure to
          add{" "}
          <span className="text-red-500 text-xs bg-gray-100 px-1 rounded-md">
            .col-form-label
          </span>{" "}
          to your{" "}
          <span className="text-red-500 text-xs bg-gray-100 px-1 rounded-md">
            {"<label>"}
          </span>{" "}
          s as well so they're vertically centered with their associated form
          controls. Checkboxes and radios require wrapper with{" "}
          <span className="text-red-500 text-xs bg-gray-100 px-1 rounded-md">
            .form-check-horizontal
          </span>
          class.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-4">
          {/* Name Input */}
          <div className="relative flex flex-col lg:flex-row justify-between lg:items-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name:
            </label>
            <div className="relative rounded-md shadow-sm w-full lg:w-[75%]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                aria-label="Name"
                className="block w-full pl-10 pr-3 py-2 border border-borderColor focus:ring-2  focus:border-blue-500 outline-none"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          </div>
          {/* Password Input */}
          <div className="relative flex flex-col lg:flex-row justify-between lg:items-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password:
            </label>
            <div className="relative rounded-md shadow-sm w-full lg:w-[75%]">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                aria-label="Password"
                className="block w-full pl-10 pr-3 py-2 border border-borderColor focus:ring-2  focus:border-blue-500 outline-none"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>
          {/* State Select */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your state:
            </label>
            <div className="relative w-full lg:w-[75%]">
              <div
                className="flex items-center justify-between p-2 border border-borderColor cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-gray-700">
                  {selectedOption || "Select an option"}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-[353px] overflow-y-scroll">
                  {states.map((option, index) => (
                    <div key={index}>
                      <div className="font-semibold px-4 py-4 text-sm text-gray-700 ">
                        {option.timeZone}
                      </div>
                      {option.states.map((option, index) => (
                        <div
                          key={index}
                          className="px-10 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 cursor-pointer"
                        >
                          <p
                            key={option}
                            onClick={() => handleOptionClick(option)}
                          >
                            {option}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Gender Radio */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender:
            </label>
            <div className="flex space-x-4 w-full lg:w-[75%]">
              {["Male", "Female"].map((gender) => (
                <label key={gender} className="flex items-center">
                  <input
                    type="radio"
                    aria-label={gender}
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{gender}</span>
                </label>
              ))}
            </div>
          </div>
          {/* Avatar Upload */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your avatar:
            </label>
            <div className=" flex items-center w-full lg:w-[75%] border border-borderColor">
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label
                htmlFor="avatar-upload"
                className="inline-flex items-center px-4 py-[10px] border-r-[1px] shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Choose File
              </label>
              <p className="ml-3 p-[10px] text-sm text-gray-700">
                {fileName || "No file selected"}
              </p>
            </div>
          </div>
          {/* Tags Input */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags:
            </label>
            <div
              className="relative w-full lg:w-[75%]"
              onClick={() => setShowTagsDropdown((prev) => !prev)}
            >
              <div className="flex flex-wrap gap-2 p-1 border border-gray-300 rounded-md min-h-[42px]">
                {selectedTags.map((tag) => (
                  <div
                    key={tag.label}
                    className="space-x-2 inline-flex items-center py-1 px-2 rounded-md text-sm font-medium bg-gray-200 text-gray-800"
                  >
                    {tag.icon}
                    <span>{tag.label}</span>

                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className=" inline-flex items-center"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              {showTagsDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
                  {availableTags.map((tag, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleTagSelect(tag)}
                      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 border-b-[1px] border-white ${
                        selectedTags.some(
                          (selectedTag) => selectedTag.label === tag.label
                        )
                          ? "bg-gray-200 text-gray-900"
                          : "hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <div className="flex items-center">
                        {tag.icon}
                        <span className="ml-2">{tag.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Message Textarea */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center ">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your message:
            </label>
            <textarea
              aria-label="Message"
              rows={4}
              className="block px-3 py-2 border border-gray-300 rounded-md focus:ring-2  focus:border-blue-500 outline-none w-full lg:w-[75%]"
              placeholder="Write your message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-fit flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none "
            >
              Submit form
              <Send className="h-5 w-5 ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BasicLayout;
