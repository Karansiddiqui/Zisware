import React from "react";
import { GoCheck, GoTrophy } from "react-icons/go";
function DailySalesStats() {
  const cardData = [
    {
      value: "68%",
      description: "Hours available",
      status: "64% average",
      svg1: (
        <div className="relative w-fit">
          <svg width="76" height="76" className="">
            <g transform="translate(38,38)">
              <path
                className="d3-progress-background"
                d="M0,38A38,38 0 1,1 0,-38A38,38 0 1,1 0,38M0,36A36,36 0 1,0 0,-36A36,36 0 1,0 0,36Z"
                style={{ fill: "rgb(240, 98, 146)", opacity: "0.2" }}
              ></path>
              <path
                className="d3-progress-foreground"
                filter="url(#blur)"
                d="M2.326828918379971e-15,-38A38,38 0 1,1 -34.38342799370878,16.179613079472677L-32.57377388877674,15.328054496342538A36,36 0 1,0 2.204364238465236e-15,-36Z"
                style={{
                  fill: "rgb(240, 98, 146)",
                  stroke: "rgb(240, 98, 146)",
                }}
              ></path>
              <path
                className="d3-progress-front"
                d="M2.326828918379971e-15,-38A38,38 0 1,1 -34.38342799370878,16.179613079472677L-32.57377388877674,15.328054496342538A36,36 0 1,0 2.204364238465236e-15,-36Z"
                style={{ fill: "rgb(240, 98, 146)", fillOpacity: "1" }}
              ></path>
            </g>
          </svg>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
            <GoCheck size={35} className="text-pink-500" />
          </div>
        </div>
      ),
      svg2: (
        <div>
          <svg height="40">
            <g width="215.15625">
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="2.6562499999999996"
                height="27.36842105263158"
                y="12.631578947368421"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="11.510416666666666"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="20.364583333333332"
                height="23.157894736842106"
                y="16.842105263157894"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="29.21875"
                height="33.68421052631579"
                y="6.315789473684212"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="38.072916666666664"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="46.92708333333333"
                height="35.78947368421053"
                y="4.210526315789473"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="55.78125"
                height="40"
                y="0"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="64.63541666666666"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="73.48958333333333"
                height="25.263157894736842"
                y="14.736842105263158"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="82.34375"
                height="35.78947368421053"
                y="4.210526315789473"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="91.19791666666666"
                height="37.89473684210526"
                y="2.10526315789474"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="100.05208333333333"
                height="21.052631578947366"
                y="18.947368421052634"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="108.90625"
                height="21.052631578947366"
                y="18.947368421052634"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="117.76041666666666"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="126.61458333333333"
                height="23.157894736842106"
                y="16.842105263157894"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="135.46875"
                height="25.263157894736842"
                y="14.736842105263158"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="144.32291666666666"
                height="21.052631578947366"
                y="18.947368421052634"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="153.17708333333331"
                height="27.36842105263158"
                y="12.631578947368421"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="162.03125"
                height="40"
                y="0"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="170.88541666666666"
                height="25.263157894736842"
                y="14.736842105263158"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="179.73958333333331"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="188.59375"
                height="35.78947368421053"
                y="4.210526315789473"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="197.44791666666666"
                height="33.68421052631579"
                y="6.315789473684212"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="206.30208333333331"
                height="31.578947368421055"
                y="8.421052631578945"
                style={{ fill: "rgb(236, 64, 122)" }}
              ></rect>
            </g>
          </svg>
        </div>
      ),
    },
    {
      value: "82%",
      description: "Productivity goal",
      status: "87% average",
      svg1: (
        <div className="relative w-fit">
          <svg width="76" height="76">
            <g transform="translate(38,38)">
              <path
                className="d3-progress-background"
                d="M0,38A38,38 0 1,1 0,-38A38,38 0 1,1 0,38M0,36A36,36 0 1,0 0,-36A36,36 0 1,0 0,36Z"
                style={{ fill: "rgb(92, 107, 192)", opacity: "0.2" }}
              ></path>
              <path
                className="d3-progress-foreground"
                filter="url(#blur)"
                d="M2.326828918379971e-15,-38A38,38 0 1,1 -34.3834279937087,-16.179613079472855L-32.573773888776664,-15.328054496342704A36,36 0 1,0 2.204364238465236e-15,-36Z"
                style={{
                  fill: "rgb(92, 107, 192)",
                  stroke: "rgb(92, 107, 192)",
                }}
              ></path>
              <path
                className="d3-progress-front"
                d="M2.326828918379971e-15,-38A38,38 0 1,1 -34.3834279937087,-16.179613079472855L-32.573773888776664,-15.328054496342704A36,36 0 1,0 2.204364238465236e-15,-36Z"
                style={{ fill: "rgb(92, 107, 192)", fillOpacity: "1" }}
              ></path>
            </g>
          </svg>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
            <GoTrophy size={35} className="text-[#5c6bc0]" />
          </div>
        </div>
      ),
      svg2: (
        <div className="">
          <svg height="40">
            <g width="215.15625">
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="2.6562499999999996"
                height="31.578947368421055"
                y="8.421052631578945"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="11.510416666666666"
                height="25.263157894736842"
                y="14.736842105263158"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="20.364583333333332"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="29.21875"
                height="31.578947368421055"
                y="8.421052631578945"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="38.072916666666664"
                height="33.68421052631579"
                y="6.315789473684212"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="46.92708333333333"
                height="35.78947368421053"
                y="4.210526315789473"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="55.78125"
                height="27.36842105263158"
                y="12.631578947368421"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="64.63541666666666"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="73.48958333333333"
                height="25.263157894736842"
                y="14.736842105263158"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="82.34375"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="91.19791666666666"
                height="31.578947368421055"
                y="8.421052631578945"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="100.05208333333333"
                height="21.052631578947366"
                y="18.947368421052634"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="108.90625"
                height="25.263157894736842"
                y="14.736842105263158"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="117.76041666666666"
                height="37.89473684210526"
                y="2.10526315789474"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="126.61458333333333"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="135.46875"
                height="23.157894736842106"
                y="16.842105263157894"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="144.32291666666666"
                height="25.263157894736842"
                y="14.736842105263158"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="153.17708333333331"
                height="35.78947368421053"
                y="4.210526315789473"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="162.03125"
                height="37.89473684210526"
                y="2.10526315789474"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="170.88541666666666"
                height="33.68421052631579"
                y="6.315789473684212"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="179.73958333333331"
                height="40"
                y="0"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="188.59375"
                height="29.473684210526315"
                y="10.526315789473685"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="197.44791666666666"
                height="23.157894736842106"
                y="16.842105263157894"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
              <rect
                className="d3-random-bars"
                width="6.197916666666666"
                x="206.30208333333331"
                height="23.157894736842106"
                y="16.842105263157894"
                style={{ fill: "rgb(92, 107, 192)" }}
              ></rect>
            </g>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="flex gap-4 h-fit flex-col sm:flex-row">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border border-borderColor p-4 bg-white h-fit flex flex-col justify-center items-center gap-6"
        >
          {card.svg1}
          <div className="flex flex-col text-center gap-1">
            <h4 className="text-xl text-textColor font-semibold">
              {card.value}
            </h4>
            <div className="text-sm text-textColor ">{card.description}</div>
            <h4 className="text-xs text-gray-400  ">{card.status}</h4>
          </div>
          <div className="">{card.svg2}</div>
        </div>
      ))}
    </div>
  );
}

export default DailySalesStats;
