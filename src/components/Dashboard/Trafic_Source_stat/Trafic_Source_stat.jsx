import { useState } from "react";

export default function DashboardCards() {
  const [isLiveUpdate, setIsLiveUpdate] = useState(true);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("June, 15 - June, 21");

  const dateRanges = [
    "June, 29 - July, 5",
    "June, 22 - June, 28",
    "June, 15 - June, 21",
    "June, 8 - June, 14",
  ];

  return (
    <div className=" grid gap-4 xl:grid-cols-2 min-h-[548px]">
      {/* Traffic Sources Card */}
      <div className="border-borderColor border-[1px] bg-white bg-card text-card-foreground shadow-sm">
        <div className="px-6 py-4 border-b-[1px] border-borderColor">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Traffic sources</div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Live update</span>
              <button
                onClick={() => setIsLiveUpdate(!isLiveUpdate)}
                className={`relative inline-flex h-[20px] w-[35px] cursor-pointer items-center rounded-full transition-colors focus:outline-blue-100 ${
                  isLiveUpdate ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 rounded-full bg-white transition-transform ${
                    isLiveUpdate ? "translate-x-[19px]" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 flex items-center justify-center flex-col sm:flex-row sm:justify-around">
          {/* New Visitors */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2">
              <div className="text-emerald-500">
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-semibold">New visitors</div>
                <div className="ml-auto text-sm text-muted-foreground">
                  2,349 avg
                </div>
              </div>
            </div>
            <div className="h-8" id="new-visitors"></div>
          </div>

          {/* New Sessions */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2">
              <div className="text-orange-500">
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="text-sm font-semibold">New sessions</div>
                <div className="ml-auto text-sm text-muted-foreground">
                  08:20 avg
                </div>
              </div>
            </div>
            <div className="h-8">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 L100,50"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                >
                  <animate
                    attributeName="d"
                    dur="4s"
                    repeatCount="indefinite"
                    values="
                      M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 L100,50;
                      M0,50 C10,55 20,45 30,50 C40,55 50,45 60,50 C70,55 80,45 90,50 L100,50;
                      M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 L100,50
                    "
                  />
                </path>
              </svg>
            </div>
          </div>

          {/* Total Online */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-2">
              <div className="text-blue-500">
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
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <div className="flex flex-col">
                <div className="text-sm font-semibold">Total online</div>
                <div className="ml-auto text-sm text-muted-foreground">
                  5,378 avg
                </div>
              </div>
            </div>
            <div className="h-8">
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 L100,50"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                >
                  <animate
                    attributeName="d"
                    dur="5s"
                    repeatCount="indefinite"
                    values="
                      M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 L100,50;
                      M0,50 C10,55 20,45 30,50 C40,55 50,45 60,50 C70,55 80,45 90,50 L100,50;
                      M0,50 C10,45 20,55 30,50 C40,45 50,55 60,50 C70,45 80,55 90,50 L100,50
                    "
                  />
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Statistics Card */}
      <div className="border-borderColor bg-white border-[1px] bg-card text-card-foreground shadow-sm">
        <div className="px-6 py-2 border-b-[1px] border-borderColor">
          <div className="flex items-center justify-between">
            <div className="font-semibold">Sales statistics</div>
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
        <div className="p-6">
          <div className="flex gap-4 justify-around">
            <div className="space-y-1">
              <div className="text-lg text-textColor font-semibold">5,689</div>
              <div className="text-xs text-muted-foreground">new orders</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg text-textColor font-semibold">32,568</div>
              <div className="text-xs text-muted-foreground">this month</div>
            </div>
            <div className="space-y-1">
              <div className="text-lg text-textColor font-semibold">
                $23,464
              </div>
              <div className="text-xs text-muted-foreground">
                expected profit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
