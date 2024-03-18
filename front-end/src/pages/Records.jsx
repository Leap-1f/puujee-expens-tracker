import Link from "next/link";
import { Fragment, useState } from "react";
import Modal from "@/components/Modal";
import Category from "@/components/Category";
function Records() {
  const [showModal, setShowModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Month is zero-based
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
          <div className="w-[100vw] bg-white flex  justify-center">
            <div className="navbar h-[80px] bg-white w-[1440px] flex items-center justify-between">
              <div className="flex justify-center items-center gap-[24px]">
                <Link href={"/Dashboard"}>
                  <img
                    className="cursor-pointer w-[27px] "
                    src="vector (1).svg"
                    alt=""
                  />
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
          <div className="flex    gap-[50px] py-[40px] ">
            <div className="bg-white border p-[24px] rounded-2xl flex flex-col gap-[24px] w-[auto] h-[1080px]">
              <div className="flex flex-col gap-[24px]">
                <p className="text-black font-semibold text-[24px] tracking-wide ">
                  Records
                </p>
                <button
                  className=" h-[32px] rounded-xl text-white bg-blue-600 text-md"
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
                        className="flex items-center h-[32px] cursor-pointer justify-between"
                      >
                        <div className="flex gap-[20px]">
                          <img src="Leading icon (3).svg" alt="" />
                          <p className="text-[16px] font-normal hover:underline ">
                            {category.name}
                          </p>
                        </div>
                        <img
                          className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                          src="Leading icon (5).svg"
                          alt=""
                        />
                      </div>
                    ))}
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img
                          className="hover:scale-125 duration-200"
                          src="Leading icon (6).svg"
                          alt=""
                        />
                        <p
                          className="text-[16px] text-black font-semibold tracking-wide hover:underline"
                          onClick={() => setShowCategory(true)}
                        >
                          Add Category
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[12px] py-[24px]">
                      <div className=" text-[16px] font-semibold text-black tracking-wide">
                        <p>Amount Range</p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="h-[40px] rounded-lg text-black border font-medium border-gray-400 w-[114px] flex justify-center items-center bg-gray-200  hover:text-red-400 hover:duration-300">
                          0
                        </div>
                        <div className="h-[40px] tracking-wide rounded-lg text-black border font-medium border-gray-400 w-[114px] flex justify-center items-center bg-gray-200  hover:text-red-400 hover:duration-300">
                          1000
                        </div>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max="100"
                        value="50"
                        className="range range-sm"
                      />
                      <div className="w-full flex justify-between text-[16px] font-normal text-black px-2">
                        <span>0</span>
                        <span>1000</span>
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
                    className="w-[30px] h-[30px] hover:scale-95 duration-200 rounded-md bg-gray-200 flex justify-center items-center text-black text-xl border-gray-300 hover:text-blue-600 hover:border-blue-600 border active:text-green-600 active:border-green-600"
                    onClick={handlePreviousMonth}
                  >
                    «
                  </button>
                  <button className=" w-[100px] h-[30px] text-[xl] text-black ">{`${year}-${month}`}</button>
                  <button
                    className="w-[30px] h-[30px]  rounded-md hover:scale-95 duration-200 flex justify-center bg-gray-200 items-center  text-black text-xl border-gray-300 hover:text-blue-600 hover:border-blue-600 border active:text-green-600 active:border-green-600"
                    onClick={handleNextMonth}
                  >
                    »
                  </button>
                </div>

                <select class="select select-primary tracking-wide bg-white border-gray-400 text-[16px]  font-medium text-black   w-[180px] h-[48px] ">
                  <option disabled selected>
                    Newest fisrt
                  </option>
                  <option>MNT-Mongolian Tugrik</option>
                  <option>USA-Dollar</option>
                  <option>RUS-Ruble</option>
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
                      className="w-[100%]  cursor-pointer h-[64px] border border-gray-300 rounded-xl hover:shadow-md duration-150 bg-white px-[24px] py-[12px] flex items-center justify-between"
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
