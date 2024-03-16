import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Chart from "chart.js/auto";
import Example from "@/Components/Chart/barchart";
import DonutChart from "@/components/DonutChart";
function Dashboard() {
  const chartRef = useRef(null);
  const transactions = [
    {
      iconSrc: "house.svg",
      title: "Lending & Renting",
      timestamp: "3 hours ago",
      amount: "-1,000₮",
    },
    {
      iconSrc: "house.svg",
      title: "Lending & Renting",
      timestamp: "3 hours ago",
      amount: "1,000₮",
    },
    {
      iconSrc: "house.svg",
      title: "Lending & Renting",
      timestamp: "3 hours ago",
      amount: "1,000₮",
    },
    {
      iconSrc: "house.svg",
      title: "Lending & Renting",
      timestamp: "3 hours ago",
      amount: "1,000₮",
    },
    {
      iconSrc: "house.svg",
      title: "Lending & Renting",
      timestamp: "3 hours ago",
      amount: "1,000₮",
    },
  ];

  return (
    <div className="flex justify-center w-[100vw] bg-gray-200">
      <div className="w-[1440px] h-[1348px] bg-gray-200 items-center flex flex-col">
        <div className="w-[100vw] bg-white flex justify-center">
          <div className="navbar h-[80px] bg-white w-[1440px] flex items-center justify-between">
            <div className="flex justify-center items-center gap-[24px]">
              <img
                className="w-[27px] cursor-pointer"
                src="vector.png"
                alt=""
              />
              <Link
                href={"/Dashboard"}
                className="w-[150px] tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 h-[40px] flex items-center justify-center rounded-xl border-black hover:scale-95 hover:duration-300 hover:shadow-xl duration-300 border text-[16px] text-black font-medium hover:text-blue-600 hover:border-blue-600 active:text-green-600 active:border-green-600"
              >
                Dashboard
              </Link>
              <Link
                href={"/Records"}
                className="w-[150px] tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 h-[40px] flex items-center justify-center rounded-xl border-black hover:scale-95 hover:duration-300 hover:shadow-xl duration-300 border text-[16px] text-black font-medium hover:text-blue-600 hover:border-blue-600 active:text-green-600 active:border-green-600"
              >
                Records
              </Link>
            </div>

            <div className="flex-none gap-8">
              <div className="form-control">
                <div className="w-[150px] h-[40px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex items-center tracking-wide justify-center rounded-xl border-black hover:scale-95 hover:duration-300 hover:shadow-xl duration-300 border text-[16px] text-black  hover:text-blue-600 hover:border-blue-600 active:text-green-600 active:border-green-600">
                  +Records
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="wo.jpeg" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52"
                >
                  <Link
                    className="flex justify-between items-center hover:bg-gray-200 duration-200 hover:rounded-lg"
                    href={""}
                  >
                    <p className="p-2">Profile</p>
                    <span className="badge">New</span>
                  </Link>

                  <Link
                    className="hover:bg-gray-200 duration-200 hover:rounded-lg"
                    href={"/Login"}
                  >
                    <p className="p-2">Settings</p>
                  </Link>
                  <Link
                    className="hover:bg-gray-200 duration-200 hover:rounded-lg"
                    href={"/Login"}
                  >
                    <p className="p-2">Logout</p>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[100%] h-[90vh] py-[40px] gap-[50px] ">
          <div className="flex gap-[50px] ">
            <div className="flex w-[100%] h-[220px] bg-blue-600 hover:shadow-2xl duration-200 justify-between gap-[20px] border rounded-2xl">
              <div className="flex flex-col gap-[90px] p-[25px]">
                <div className="flex gap-[10px]">
                  <img src="vector (2).png" alt="" />
                  <img src="Geld (2).svg" alt="" />
                </div>
                <div className="flex flex-col ">
                  <p className="text-[16px] text-gray-300 tracking-wide">
                    cash
                  </p>
                  <p className="text-white text-[24px] ">10.000.000</p>
                </div>
              </div>
              <img className="" src="Shape.svg" alt="" />
              {/* <img className="w-[40px] h-[40px]" src="Logo (1).svg" alt="" /> */}
            </div>
            <div className="flex flex-col w-[100%] hover:shadow-2xl duration-200 h-[220px] bg-white border rounded-2xl">
              <div className="border-b-2 h-[8vh] px-[24px] py-[15px] flex gap-[20px] items-center">
                <img src="greendot.svg" alt="" />
                <p className="font-medium text-black tracking-wide text-[16px]">
                  Your income
                </p>
              </div>
              <div className="px-[24px] py-[20px] flex flex-col gap-[10px] ">
                <p className="text-[36px] text-black font-bold">1,200,000₮</p>
                <p className="text-[18px] text-gray-400 tracking-wide">
                  Your income amount
                </p>
                <div className="flex items-center gap-[15px]">
                  <img className="w-[20px]" src="Leading icon (1).svg" alt="" />
                  <p className="text-[18px] text-black tracking-wide">
                    32% from last month
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[100%] hover:shadow-2xl duration-200  h-[220px] bg-white  border rounded-2xl">
              <div className="border-b-2 h-[8vh] px-[24px] py-[15px] flex gap-[20px] items-center">
                <img src="bluedot.svg" alt="" />
                <p className="font-medium text-black tracking-wide text-[16px]">
                  Total Expenses
                </p>
              </div>
              <div className="px-[24px] py-[20px]  flex flex-col gap-[10px] ">
                <p className="text-[36px] text-black font-bold">1,200,000₮</p>
                <p className="text-[18px] text-gray-400 tracking-wide">
                  Your income amount
                </p>
                <div className="flex items-center gap-[15px]">
                  <img className="w-[20px]" src="Leading icon (2).svg" alt="" />
                  <p className="text-[18px] text-black tracking-wide">
                    32% from last month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[50px] w-[100%] h-[300px]   ">
            <div className="flex flex-col w-[50%]  hover:shadow-xl duration-200 bg-white      rounded-2xl">
              <div className="border-b-2 h-[56px] px-[24px] py-[20px] flex gap-[20px] items-center">
                <p className="font-semibold text-black text-[16px] tracking-wide">
                  Income - Expense
                </p>
              </div>
              <div className=" border-gray-400  rounded-xl  px-[100px] w-[700px] h-[242px]  ">
                <Example /> {/* Uncomment to render the Example component */}
              </div>
            </div>
            <div className="flex flex-col w-[50%] hover:shadow-xl  duration-200 bg-white  h-[300px] border rounded-2xl ">
              <div className="border-b-2 h-[56px] px-[24px] py-[20px] flex gap-[20px] justify-between items-center ">
                <p className="font-semibold text-black text-[16px] tracking-wide">
                  Income - Expense
                </p>
                <p className="text-[16px] tracking-wide">Jun 1 - Nov 30</p>
              </div>
              <div className=" w-[600px] h-[250px] px-[70px] flex items-center ">
                <DonutChart></DonutChart>
              </div>
            </div>
          </div>
          <div className="flex flex-col  w-[100%] h-[456px] rounded-b-xl">
            <div className="border-b w-[100%] h-[56px] rounded-t-xl   bg-white border px-[24px] flex gap-[20px] items-center">
              <p className="font-semibold text-black text-[16px] tracking-wide">
                Last Records
              </p>
            </div>
            <div className="w-[100%] h-[400px] bg-white px-[24px] cursor-pointer">
              {transactions.map((transaction, index) => (
                <div
                  key={index}
                  className="w-[100%] h-[80px] border-b border-gray-300 py-[20px] flex justify-between  hover:shadow-lg"
                >
                  <div className="flex items-center gap-[16px]">
                    <img src={transaction.iconSrc} alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px]   font-normal tracking-wide text-black">
                        {transaction.title}
                      </p>
                      <p className="text-12px text-gray-400">
                        {transaction.timestamp}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-16px items-center text-green-500 tracking-wider">
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
