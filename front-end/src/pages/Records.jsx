import Link from "next/link";
import { Fragment, useState } from "react";
import Modal from "@/Components/Modal";
import Modal2 from "@/Components/Modal2";
function Records() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-center h-[1250px] w-[100vw] bg-gray-200">
        <div className="w-[1440px]   bg-gray-200 ">
          <div className="navbar h-[80px]  bg-white rounded-xl">
            <div className="flex-1  ">
              <div className="flex  justify-center items-center gap-[24px]">
                <img className="w-[27px]" src="vector.png" alt="" />
                <Link
                  href={"/Dashboard"}
                  className="btn btn-ghost text-[16px] text-black"
                >
                  Dashboard
                </Link>
                <Link
                  href={"/Records"}
                  className="btn btn-ghost text-[16px] text-black"
                >
                  Records
                </Link>
              </div>
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
                  <div className="text-[16px] font-bold text-black">Types</div>
                  <div className=" flex flex-col gap-[10px] ">
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox w-[20px] h-[20px] rounded-full"
                      />
                      <p className="text-md cursor-pointer text-black hover:underline">
                        All
                      </p>
                    </div>

                    <div className="flex items-center gap-[10px]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox w-[20px] h-[20px] rounded-full"
                      />
                      <p className="text-md text-black cursor-pointer hover:underline">
                        Income
                      </p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox w-[20px] h-[20px] rounded-full"
                      />
                      <p className="text-md text-black cursor-pointer hover:underline">
                        Expense
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]  ">
                  <div className="text-[16px] font-bold text-black flex justify-between">
                    <p>Category</p>
                    <p className="text-gray-500 cursor-pointer font-light  ">
                      Clear
                    </p>
                  </div>
                  <div className="h-[24px] ">
                    <div className="flex items-center justify-between cursor-pointer">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Food & Drinks
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img className="" src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Shopping{" "}
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px] cursor-pointer hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Housing
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Transportation
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Vehicle
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Life & Entertainment
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Communication, PC
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px]  hover:scale-150 scale duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Financial expenses
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Investments
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px]  text-black hover:underline">
                          Income
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-[16px] text-black hover:underline">
                          Others
                        </p>
                      </div>
                      <img
                        className="w-[20px] h-[20px]  hover:scale-150 duration-200"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center h-[32px] cursor-pointer justify-between">
                      <div className="flex gap-[20px]">
                        <img
                          className="hover:scale-125 duration-200"
                          src="Leading icon (6).svg"
                          alt=""
                        />
                        <p className="text-[16px] text-black hover:underline">
                          Add Category
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] py-[24px]">
                      <div className=" text-[16px] font-bold text-black">
                        <p>Amount Range</p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="h-[48px] rounded-lg text-black border w-[114px] flex justify-center items-center  hover:text-red-400 hover:duration-300">
                          0
                        </div>
                        <div className="h-[48px]  border text-black rounded-lg w-[114px] flex justify-center items-center">
                          1000
                        </div>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max="100"
                        value="25"
                        className="range"
                        step="25"
                      />
                      <div className="w-full flex justify-between text-xs text-black px-2">
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
                <div className="join h-[48px] ">
                  <button className="join-item btn">«</button>
                  <button className="join-item btn">Last 30 Days</button>
                  <button className="join-item btn">»</button>
                </div>

                <select class="select select-primary bg-gray-100 text-[16px] font-semibold text-black  border-gray-300 w-[180px] h-[48px] ">
                  <option disabled selected>
                    Newest fisrt
                  </option>
                  <option>MNT-Mongolian Tugrik</option>
                  <option>USA-Dollar</option>
                  <option>RUS-Ruble</option>
                </select>
              </div>
              <div className="w-[1080px] h-[50px] border border-gray-300 rounded-2xl bg-white flex justify-between py-[10px] px-[24px]">
                <div className="flex gap-[16px] justify-center items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox w-[20px] h-[20px] border-gray-300"
                  />
                  <p className="text-lg text-black">Select all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isvisible={showModal} onClose={() => setShowModal(false)}></Modal>
    </Fragment>
  );
}

export default Records;
