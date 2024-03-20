import Link from "next/link";
import { Fragment, useState } from "react";
import Modal from "@/components/Modal";
import { Vector } from "@/components/Icon";

import Category from "@/components/Category";
function Records() {
  const [showModal, setShowModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Month is zero-based
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(1000);
  const [transactions, setTransactions] = useState([
    {
      title: "Today",
      data: [
        {
          id: 1,
          icon: "house.svg",
          description: "Lending & Renting",
          time: "14:00",
          amount: "1,000₮",
        },
        {
          id: 2,
          icon: "ForkKnife.svg",
          description: "Lending & Renting",
          time: "14:00",
          amount: "1,000₮",
        },
        {
          id: 3,
          icon: "house.svg",
          description: "Lending & Renting",
          time: "14:00",
          amount: "1,000₮",
        },
        {
          id: 4,
          icon: "house.svg",
          description: "Lending & Renting",
          time: "14:00",
          amount: "1,000₮",
        },
      ],
    },
    {
      title: "Yesterday",
      data: [
        {
          id: 4,
          icon: "ForkKnife.svg",
          description: "Lending & Renting",
          time: "14:00",
          amount: "-1,000₮",
        },
        {
          id: 5,
          icon: "house.svg",
          description: "Lending & Renting",
          time: "14:00",
          amount: "1,000₮",
        },
        {
          id: 6,
          icon: "house.svg",
          description: "Lending & Renting",
          time: "14:00",
          amount: "1,000₮",
        },
      ],
    },
  ]);
  const handlePreviousMonth = () => {
    setMonth((prevMonth) => {
      if (prevMonth === 1) {
        setYear((prevYear) => prevYear - 1);
        return 12;
      } else {
        return prevMonth - 1;
      }
    });
  };

  const handleNextMonth = () => {
    setMonth((prevMonth) => {
      if (prevMonth === 12) {
        setYear((prevYear) => prevYear + 1);
        return 1;
      } else {
        return prevMonth + 1;
      }
    });
  };
  const categories = [
    { id: 1, name: "Food & Drinks" },
    { id: 2, name: "Shopping" },
    { id: 3, name: "Housing" },
    { id: 4, name: "Transportation" },
    { id: 5, name: "Vehicle" },
    { id: 6, name: "Life & Entertainment" },
    { id: 7, name: "Communication, PC" },
    { id: 8, name: "Financial expenses" },
    { id: 9, name: "Investments" },
    { id: 10, name: "Income" },
    { id: 11, name: "Others" },
  ];
  return (
    <Fragment>
      <div className="flex justify-center h-[1250px] w-[100vw] bg-gray-100 ">
        <div className="w-[1440px]   bg-gray-100  flex items-center flex-col">
          <div className="w-[100vw]  shadow-md bg-white flex  justify-center">
            <div className="navbar  h-[80px] bg-white w-[1440px] flex items-center justify-between">
              <div className="flex justify-center items-center gap-[24px]">
                <Link href={"/Dashboard"}>
                  <Vector />
                </Link>
                <Link
                  href={"/Dashboard"}
                  className="w-[150px] h-[40px] bg-clip-text text-transparent bg-gradient-to-r rounded-lg from-pink-500 to-violet-500 tracking-wide flex items-center justify-center border-t-orange-500 border-b-emerald-500 border-e-cyan-400 border-s-pink-600 hover:scale-95 hover:duration-300 hover:shadow-xl duration-300 border-2 text-[16px] text-black font-medium hover:text-blue-600 hover:border-blue-600 active:text-green-600 active:border-green-600"
                >
                  Dashboard
                </Link>
                <Link
                  href={"/Records"}
                  className="w-[150px] h-[40px] bg-clip-text text-transparent bg-gradient-to-r rounded-lg from-pink-500 to-violet-500 tracking-wide flex items-center justify-center border-t-orange-500 border-b-emerald-500 border-e-cyan-400 border-s-pink-600 hover:scale-95 hover:duration-300 hover:shadow-xl duration-300 border-2 text-[16px] text-black font-medium hover:text-blue-600 hover:border-blue-600 active:text-green-600 active:border-green-600"
                >
                  Records
                </Link>
              </div>

              <div className="flex-none gap-8">
                <div className="form-control">
                  <div
                    onClick={() => setShowModal(true)}
                    className="w-[150px] h-[40px] bg-clip-text text-transparent bg-gradient-to-r rounded-lg from-pink-500 to-violet-500 tracking-wide flex items-center justify-center border-t-orange-500 border-b-emerald-500 border-e-cyan-400 border-s-pink-600 hover:scale-95 hover:duration-300 hover:shadow-xl duration-300 border-2 text-[16px] text-black font-medium hover:text-blue-600 hover:border-blue-600 active:text-green-600 active:border-green-600"
                  >
                    +Records
                  </div>
                </div>

                <div className="box dropdown dropdown-end animate-pulse-border">
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
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl text-black bg-white rounded-box w-52"
                  >
                    <Link
                      className="flex justify-between items-center hover:bg-gray-200 duration-200 hover:rounded-lg"
                      href={"/Dashboard"}
                    >
                      <p className="p-2">Profile</p>
                      <span className="badge text-white bg-black">New</span>
                    </Link>

                    <Link
                      className="hover:bg-gray-200 duration-200 hover:rounded-lg"
                      href={"/Currency"}
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
          <div className="flex    gap-[50px] py-[40px] ">
            <div className="bg-white border p-[24px] rounded-2xl flex flex-col gap-[24px] w-[auto] h-[1080px]">
              <div className="flex flex-col gap-[24px]">
                <p className="text-black font-semibold text-[24px] tracking-wide ">
                  Records
                </p>
                <button
                  className=" h-[32px] rounded-xl text-white bg-blue-500 text-md active:scale-95 duration-200"
                  onClick={() => setShowModal(true)}
                >
                  + Add
                </button>
                {/* Search input */}
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 tracking-wide h-[32px] text-black w-[250px] text-[16px] rounded-xl input input-bordered"
                  />
                </div>
                <div className="flex flex-col  gap-[24px]">
                  <div className="text-[16px] font-semibold text-black">
                    Types
                  </div>
                  <div className=" flex flex-col gap-[10px] ">
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="radio"
                        id="all"
                        name="recordType"
                        value="all"
                        checked={selectedTab === "all"}
                        onChange={() => setSelectedTab("all")}
                      />
                      <label
                        htmlFor="all"
                        className="text-md cursor-pointer tracking-wide text-black hover:underline"
                      >
                        All
                      </label>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="radio"
                        id="income"
                        name="recordType"
                        value="income"
                        checked={selectedTab === "income"}
                        onChange={() => setSelectedTab("income")}
                      />
                      <label
                        htmlFor="income"
                        className="text-md text-black tracking-wide cursor-pointer hover:underline"
                      >
                        Income
                      </label>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="radio"
                        id="expense"
                        name="recordType"
                        value="expense"
                        checked={selectedTab === "expense"}
                        onChange={() => setSelectedTab("expense")}
                      />
                      <label
                        htmlFor="expense"
                        className="text-md text-black tracking-wide cursor-pointer hover:underline"
                      >
                        Expense
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]  ">
                  <div className="text-[16px] gap-[10px]  flex-col font-bold text-black flex justify-between">
                    <div className="text-[16px] flex font-semibold tracking-wide text-black justify-between">
                      <p>Category</p>
                      <p className="text-[16px] text-gray-400 tracking-wide font-normal ">
                        clear
                      </p>
                    </div>
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center h-[32px] cursor-pointer justify-between dropdown dropdown-right dropdown-end"
                      >
                        <div tabIndex={0} className="flex gap-[20px]">
                          <img src="Leading icon (3).svg" alt="" />
                          <p className="text-[16px] font-normal hover:underline ">
                            {category.name}
                          </p>
                        </div>
                        <img
                          tabIndex={0}
                          className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                          src="Leading icon (5).svg"
                          alt=""
                        />
                        <div className="dropdown-content bg-white border hover:shadow-xl flex flex-col gap-[10px]   z-[1] menu p-2 shadow border-gray-500 rounded-box w-36">
                          <div
                            className="flex justify-between px-2  hover:scale-105 hover:duration-300 duration-300
                          "
                          >
                            <a> Edit</a>
                            <img className="w-[18px]" src="edit.png" alt="" />
                          </div>
                          <div className="flex justify-between px-2  hover:scale-105 hover:duration-300 duration-300 ">
                            <a> Delete</a>
                            <img className="w-[18px]" src="delete.png" alt="" />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div
                        className="flex gap-[20px]"
                        onClick={() => setShowCategory(true)}
                      >
                        <img
                          className="hover:scale-125 duration-200"
                          src="Leading icon (6).svg"
                          alt=""
                        />
                        <p className="text-[16px] text-black font-semibold tracking-wide hover:underline ">
                          Add Category
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="font-medium">Amount range</p>
                      <div className="flex *:w-[49%] *:h-10 justify-between">
                        <input
                          type="number"
                          placeholder="0"
                          className="input input-bordered w-full bg-white border-gray-500  rounded-lg max-w-xs"
                          onChange={(event) => {
                            setMinRange(event.target.value);
                          }}
                        />
                        <input
                          type="number"
                          placeholder="1000"
                          className="input input-bordered w-full bg-white border-gray-500  rounded-lg max-w-xs"
                          onChange={(event) => {
                            setMaxRange(event.target.value);
                          }}
                        />
                      </div>
                      <div>
                        <section>
                          <input
                            className="w-full"
                            type="range"
                            min={minRange}
                            max={maxRange}
                            step={10}
                          ></input>
                        </section>
                        <div className="flex justify-between">
                          <p>{minRange}</p>
                          <p>{maxRange}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[1100px] flex-col h-[100vh] gap-[40px] ">
              {/* Map over the transactions */}{" "}
              <div className="flex justify-between w-[1100px] h-[48px] py-[24px] pr-[20px] ">
                <div className=" h-[48px] bf flex items-center justify-center gap-[15px]">
                  <button
                    className="group relative  overflow-hidden rounded border  bg-gray-200  px-[10px] py-[2px] border-gray-300 items-center flex justify-center text-xl font-medium text-slate-800 focus:outline-none    active:text-blue-500"
                    onClick={handlePreviousMonth}
                  >
                    <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
                    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
                    <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
                    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
                    «
                  </button>
                  <button className=" w-[100px] h-[30px] text-[xl] text-black ">{`  ${year}-${month} `}</button>

                  <button
                    className="group relative  overflow-hidden rounded border  bg-gray-200  px-[10px] py-[2px] border-gray-300 items-center flex justify-center text-xl font-medium text-slate-800  focus:outline-none   active:text-blue-500"
                    onClick={handleNextMonth}
                  >
                    <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
                    <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
                    <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-blue-500 transition-all duration-200 group-hover:w-full"></span>
                    <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-blue-500 transition-all duration-200 group-hover:h-full"></span>
                    »
                  </button>
                </div>

                <select class="select select-primary tracking-wide bg-white border-gray-400 text-[16px]  font-medium text-black   w-[180px] h-[48px] ">
                  <option disabled selected>
                    Newest fisrt
                  </option>
                  <option>Today</option>
                  <option>Yesterday</option>
                  <option>Last Week</option>
                  <option>Last Month</option>
                  <option>Last Year</option>
                </select>
              </div>
              {transactions.map((section, index) => (
                <div className="flex flex-col gap-[24px]" key={index}>
                  <div className="text-[16px] tracking-wide  font-semibold text-black">
                    {section.title}
                  </div>
                  {/* Map over the data within each section */}
                  {section.data.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="w-[98%]   cursor-pointer h-[64px] border border-gray-300 rounded-xl hover:shadow-md duration-150 bg-white px-[24px] py-[12px] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-[16px]">
                        <div className="form-control">
                          <label className="label cursor-pointer">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="checkbox"
                            />
                          </label>
                        </div>
                        <img src={transaction.icon} alt="" />
                        <div className="flex flex-col">
                          <p className="text-[16px]  tracking-wide text-black">
                            {transaction.description}
                          </p>
                          <p className="text-12px text-gray-400">
                            {transaction.time}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`flex text-16px items-center ${
                          transaction.amount.startsWith("-")
                            ? "text-red-500"
                            : "text-green-500"
                        } tracking-wider`}
                      >
                        {transaction.amount}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Category
        isvisible={showCategory}
        onClose={() => setShowCategory(false)}
      ></Category>

      <Modal isvisible={showModal} onClose={() => setShowModal(false)}></Modal>
    </Fragment>
  );
}

export default Records;
