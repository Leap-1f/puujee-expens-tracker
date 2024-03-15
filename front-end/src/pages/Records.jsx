import Link from "next/link";
import { Fragment, useState } from "react";
import Modal from "@/Components/Modal";
import Category from "@/Components/Category";
function Records() {
  const [showModal, setShowModal] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Month is zero-based

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
      <div className="flex justify-center h-[1250px] w-[100vw] bg-gray-200">
        <div className="w-[1440px]   bg-gray-200  flex items-center flex-col">
          <div className="w-[100vw] bg-white flex  justify-center">
            <div className="navbar h-[80px] bg-white w-[1440px] flex items-center justify-between">
              <div className="flex justify-center items-center gap-[24px]">
                <Link href={"/Dashboard"}>
                  <img
                    className="cursor-pointer w-[27px]"
                    src="vector.png"
                    alt=""
                  />
                </Link>
                <Link
                  href={"/Dashboard"}
                  className="btn btn-ghost text-[20px] text-black font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href={"/Records"}
                  className="btn btn-ghost text-[20px] text-black font-medium"
                >
                  Records
                </Link>
              </div>

              <div className="flex-none gap-8">
                <div className="form-control">
                  <div className="w-[99px] btn  items-center flex justify-center text-md border border-white bg-blue-600 text-white h-[42px] rounded-3xl">
                    +Records
                  </div>
                </div>
                <div className="dropdown dropdown-end">
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-[200px] rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex    gap-[50px] py-[40px] ">
            <div className="bg-white border p-[24px] rounded-2xl flex flex-col gap-[24px] w-[auto] h-[1080px]">
              <div className="flex flex-col gap-[24px]">
                <p className="text-black font-bold text-[24px]">Records</p>
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
                    className="bg-gray-300 h-[32px] text-black w-[250px] text-[16px] rounded-xl input input-bordered"
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
                        className="text-md cursor-pointer text-black hover:underline"
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
                        className="text-md text-black cursor-pointer hover:underline"
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
                        className="text-md text-black cursor-pointer hover:underline"
                      >
                        Expense
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]  ">
                  <div className="text-[16px] gap-[10px]  flex-col font-bold text-black flex justify-between">
                    <div className="text-[16px] font-semibold text-black">
                      Category
                    </div>
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center h-[32px] cursor-pointer justify-between"
                      >
                        <div className="flex gap-[20px]">
                          <img src="Leading icon (3).svg" alt="" />
                          <p className="text-[16px] font-normal hover:underline">
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
                          className="text-[16px] text-black font-semibold hover:underline"
                          onClick={() => setShowCategory(true)}
                        >
                          Add Category
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[10px] py-[24px]">
                      <div className=" text-[16px] font-semibold text-black">
                        <p>Amount Range</p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="h-[48px] rounded-lg text-black border font-medium border-gray-400 w-[114px] flex justify-center items-center bg-gray-200  hover:text-red-400 hover:duration-300">
                          0
                        </div>
                        <div className="h-[48px] tracking-wide rounded-lg text-black border font-medium border-gray-400 w-[114px] flex justify-center items-center bg-gray-200  hover:text-red-400 hover:duration-300">
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
                      <div className="w-full flex justify-between text-xs font-medium text-black px-2">
                        <span>0</span>
                        <span>1000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[1100px] flex-col h-[100vh] gap-[40px] ">
              <div className="flex justify-between w-[1100px] h-[48px] py-[24px] pr-[20px] pl-[130px]">
                <div className="join h-[48px]">
                  <button
                    className="join-item btn"
                    onClick={handlePreviousMonth}
                  >
                    «
                  </button>
                  <button className="join-item btn">{`${year}-${month}`}</button>
                  <button className="join-item btn" onClick={handleNextMonth}>
                    »
                  </button>
                </div>

                <select class="select select-primary bg-gray-100 text-[16px]  font-medium text-black  border-gray-300 w-[180px] h-[48px] ">
                  <option disabled selected>
                    Newest fisrt
                  </option>
                  <option>MNT-Mongolian Tugrik</option>
                  <option>USA-Dollar</option>
                  <option>RUS-Ruble</option>
                </select>
              </div>
              <div className="w-[1080px] h-[50px] border border-gray-300 rounded-xl bg-white flex justify-between py-[10px] px-[24px]">
                <div className="flex gap-[16px] justify-center items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox w-[20px] h-[20px] border-gray-300"
                  />
                  <p className="text-lg text-black">Select all</p>
                </div>
                <div className="flex items-center">35,500₮</div>
              </div>
              <div className="w-[1080px] h-[404px] flex flex-col gap-[12px]">
                <div className="text-[16px] font-semibold text-black">
                  Today
                </div>
                <div className="w-[100%] h-[64px] border border-gray-300 rounded-xl bg-white px-[24px] py-[12px] flex items-center justify-between">
                  <div className="flex  items-center gap-[16px]">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <img src="house.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px]  font-medium tracking-wide text-black">
                        Lending & Renting
                      </p>
                      <p className="text-12px text-gray-400">14:00</p>
                    </div>
                  </div>
                  <div className="flex text-16px items-center text-green-500 tracking-wider">
                    1,000₮
                  </div>
                </div>
                <div className="w-[100%] h-[64px] border border-gray-300 rounded-xl bg-white px-[24px] py-[12px] flex items-center justify-between">
                  <div className="flex  items-center gap-[16px]">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <img src="ForkKnife.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px]  font-medium tracking-wide text-black">
                        Lending & Renting
                      </p>
                      <p className="text-12px text-gray-400">14:00</p>
                    </div>
                  </div>
                  <div className="flex text-16px items-center text-green-500 tracking-wider">
                    1,000₮
                  </div>
                </div>
                <div className="w-[100%] h-[64px] border border-gray-300 rounded-xl bg-white px-[24px] py-[12px] flex items-center justify-between">
                  <div className="flex  items-center gap-[16px]">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <img src="house.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px]  font-medium tracking-wide text-black">
                        Lending & Renting
                      </p>
                      <p className="text-12px text-gray-400">14:00</p>
                    </div>
                  </div>
                  <div className="flex text-16px items-center text-green-500 tracking-wider">
                    1,000₮
                  </div>
                </div>
              </div>
              <div className="w-[1080px] h-[480px]  flex flex-col gap-[12px]">
                <div className="text-[16px] font-semibold text-black">
                  Yesterday
                </div>
                <div className="w-[100%] h-[64px] border border-gray-300 rounded-xl bg-white px-[24px] py-[12px] flex items-center justify-between">
                  <div className="flex  items-center gap-[16px]">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <img src="ForkKnife.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px]  font-medium tracking-wide text-black">
                        Lending & Renting
                      </p>
                      <p className="text-12px text-gray-400">14:00</p>
                    </div>
                  </div>
                  <div className="flex text-16px items-center text-red-500 tracking-wider">
                    -1,000₮
                  </div>
                </div>
                <div className="w-[100%] h-[64px] border border-gray-300 rounded-xl bg-white px-[24px] py-[12px] flex items-center justify-between">
                  <div className="flex  items-center gap-[16px]">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox"
                        />
                      </label>
                    </div>
                    <img src="house.svg" alt="" />
                    <div className="flex flex-col">
                      <p className="text-[16px]  font-medium tracking-wide text-black">
                        Lending & Renting
                      </p>
                      <p className="text-12px text-gray-400">14:00</p>
                    </div>
                  </div>
                  <div className="flex text-16px items-center text-green-500 tracking-wider">
                    1,000₮
                  </div>
                </div>
              </div>
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
