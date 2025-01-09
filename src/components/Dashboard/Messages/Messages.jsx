import { useState, useMemo } from "react";
import { LuHistory } from "react-icons/lu";
const allMessages = [
  {
    id: 1,
    avatar: "/assets/images/users/face1.jpg",
    name: "James Alexander",
    message:
      "Who knows, maybe that would be the best thing for me to do. I'll think about it and let you know my decision tomorrow.",
    time: "14:58",
    badge: 5,
    online: true,
    day: "Tuesday",
    link: "#",
  },
  {
    id: 2,
    avatar: "/assets/images/users/face2.jpg",
    name: "Margo Baker",
    message:
      "That was something he was unable to do because of the strict deadline. We might need to reconsider our approach.",
    time: "12:16",
    badge: 4,
    online: true,
    day: "Tuesday",
    link: "#",
  },
  {
    id: 3,
    avatar: "/assets/images/users/face3.jpg",
    name: "Emma Wilson",
    message:
      "I'm looking forward to our meeting tomorrow. I've prepared all the necessary documents for our discussion.",
    time: "10:30",
    online: true,
    day: "Tuesday",
    link: "#",
  },
  {
    id: 4,
    avatar: "/assets/images/users/face4.jpg",
    name: "Michael Brown",
    message:
      "Can you please send me the report by EOD? It's crucial for the presentation I'm giving to the board tomorrow morning.",
    time: "09:45",
    badge: 2,
    online: false,
    day: "Tuesday",
    link: "#",
  },
  {
    id: 5,
    avatar: "/assets/images/users/face5.jpg",
    name: "Sophia Lee",
    message:
      "Great job on the presentation yesterday! The client was very impressed with our proposal and the detailed analysis you provided.",
    time: "08:20",
    online: true,
    day: "Tuesday",
    link: "#",
  },
  {
    id: 6,
    avatar: "/assets/images/users/face6.jpg",
    name: "Oliver Taylor",
    message:
      "Don't forget about the team lunch today. We're meeting at the new Italian restaurant down the street at 12:30 PM.",
    time: "07:55",
    online: true,
    day: "Tuesday",
    link: "#",
  },
  {
    id: 7,
    avatar: "/assets/images/users/face7.jpg",
    name: "Jeremy Victorino",
    message:
      "But that would be extremely strained and suspicious. We need to find a more natural approach to introduce the new system.",
    time: "22:48",
    online: true,
    day: "Monday",
    link: "#",
  },
  {
    id: 8,
    avatar: "/assets/images/users/face8.jpg",
    name: "Sarah Connor",
    message:
      "I'll be back with more information tomorrow. The research team is still compiling the data we need for the analysis.",
    time: "18:30",
    badge: 2,
    online: true,
    day: "Monday",
    link: "#",
  },
  {
    id: 9,
    avatar: "/assets/images/users/face9.jpg",
    name: "David Johnson",
    message:
      "Can we reschedule our meeting to next week? I have an unexpected client visit that I need to prepare for urgently.",
    time: "15:20",
    online: false,
    day: "Monday",
    link: "#",
  },
  {
    id: 10,
    avatar: "/assets/images/users/face10.jpg",
    name: "Emily Davis",
    message:
      "I've sent you the updated project timeline. Please review it and let me know if you have any questions or concerns.",
    time: "13:45",
    badge: 1,
    online: true,
    day: "Monday",
    link: "#",
  },
  {
    id: 11,
    avatar: "/assets/images/users/face11.jpg",
    name: "Daniel Wilson",
    message:
      "Let's discuss the new feature implementation. I have some ideas that could significantly improve user experience.",
    time: "11:10",
    online: true,
    day: "Monday",
    link: "#",
  },
  {
    id: 12,
    avatar: "/assets/images/users/face12.jpg",
    name: "Olivia Martinez",
    message:
      "Don't forget to submit your expense report. The finance department needs it by the end of the week for processing.",
    time: "09:30",
    online: false,
    day: "Monday",
    link: "#",
  },
  {
    id: 13,
    avatar: "/assets/images/users/face13.jpg",
    name: "Beatrix Diaz",
    message:
      "What a strenuous career it is that I've chosen. Sometimes I wonder if I should have pursued a different path.",
    time: "15:45",
    online: true,
    day: "Friday",
    link: "#",
  },
  {
    id: 14,
    avatar: "/assets/images/users/face14.jpg",
    name: "John Smith",
    message:
      "Looking forward to our meeting next week. I've prepared a detailed agenda to make the most of our time together.",
    time: "09:15",
    badge: 1,
    online: false,
    day: "Friday",
    link: "#",
  },
  {
    id: 15,
    avatar: "/assets/images/users/face15.jpg",
    name: "Alice Johnson",
    message:
      "Have a great weekend everyone! Don't forget to recharge and come back refreshed on Monday for our big project kick-off.",
    time: "16:30",
    online: true,
    day: "Friday",
    link: "#",
  },
  {
    id: 16,
    avatar: "/assets/images/users/face16.jpg",
    name: "Robert Brown",
    message:
      "Don't forget about the team building event next Friday. It's important that everyone attends to boost our team morale.",
    time: "14:20",
    badge: 3,
    online: true,
    day: "Friday",
    link: "#",
  },
  {
    id: 17,
    avatar: "/assets/images/users/face17.jpg",
    name: "Emma Wilson",
    message:
      "I've completed the project report. Please review it and provide your feedback by Monday so we can finalize it.",
    time: "11:55",
    online: false,
    day: "Friday",
    link: "#",
  },
  {
    id: 18,
    avatar: "/assets/images/users/face18.jpg",
    name: "Michael Davis",
    message:
      "Let's schedule a call to discuss the client feedback. I think we need to address some of their concerns promptly.",
    time: "10:40",
    online: true,
    day: "Friday",
    link: "#",
  },
];

function truncateMessage(message) {
  const words = message.split(" ");
  const wordCount = Math.floor(Math.random() * (9 - 6 + 1)) + 6;
  return words.slice(0, wordCount).join(" ") + "...";
}

export default function Messages() {
  const [selectedDay, setSelectedDay] = useState("Tuesday");

  const filteredMessages = useMemo(
    () => allMessages.filter((message) => message.day === selectedDay),
    [selectedDay]
  );

  const days = ["Tuesday", "Monday", "Friday"];

  return (
    <div className="mx-auto bg-white rounded-lg shadow ">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className="text-lg text-textColor font-semibold">My messages</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">
            <LuHistory size={18} />
          </span>
          <time className="text-sm text-gray-500">Jul 7, 10:30</time>
          <span className="px-2 py-1 text-xs font-medium text-white bg-emerald-500 rounded">
            Online
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 p-4 text-textColor text-lg mb-12">
        <div className="text-center">
          <div className=" font-semibold">2,345</div>
          <div className="text-xs text-gray-500">this week</div>
        </div>
        <div className="text-center">
          <div className=" font-semibold">3,568</div>
          <div className="text-xs text-gray-500">this month</div>
        </div>
        <div className="text-center">
          <div className=" font-semibold">32,693</div>
          <div className="text-xs text-gray-500">all messages</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`flex-1 py-2 text-sm font-medium 
                ${
                  selectedDay === day
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500 hover:text-textColor "
                }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Messages with animation */}
      <div className="overflow-auto max-h-[364px] transition-opacity duration-300 text-nowrap">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message) => (
            <div
              key={message.id}
              className="flex items-start gap-3 p-4 opacity-0 animate-fade-in"
              style={{ animation: "fadeIn 0.2s ease-in-out forwards" }}
            >
              <div className="relative flex-shrink-0">
                <a href={message.link}>
                  {" "}
                  <img
                    src={message.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </a>

                <span
                  className={`absolute bottom-0 right-0 w-[12px] h-[12px] ${
                    message.online ? "bg-green-600" : "bg-red-500"
                  } border-2 border-white rounded-full`}
                />
                {message.badge && (
                  <span className="absolute -top-[30%] -right-[30%] px-2 py-1 text-xs font-medium text-black bg-yellow-400  rounded-full">
                    {message.badge}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={message.link}
                    className="text-sm text-blue-500 font-semibold"
                  >
                    {message.name}
                  </a>
                  <time className="text-sm text-textColor">{message.time}</time>
                </div>
                <p
                  className="text-sm text-gray-600 truncate"
                  title={message.message}
                >
                  {truncateMessage(message.message)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            No messages for {selectedDay}
          </div>
        )}
      </div>

      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0.2;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
