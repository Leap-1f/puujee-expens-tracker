import Link from "next/link";
import { Fragment, useState } from "react";
import Modal from "@/Components/Modal";

function Records() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="flex justify-center scroll-m-10">
        <div className="w-[1440px] h-[1308px] fixed bg-gray-200  ">
          <div className="navbar h-[100px] bg-white">
            <div className="flex-1 ">
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
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
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
                <p className="text-black font-bold text-2xl">Records</p>
                <button
                  className=" h-[32px] rounded-xl text-white bg-blue-600 text-lg"
                  onClick={() => setShowModal(true)}
                >
                  + Add
                </button>
                {/* Search input */}
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-300 h-[24px] text-[16px] rounded-2xl input input-bordered"
                  />
                </div>
                <div className="flex flex-col  gap-[24px]">
                  <div className="text-2xl ">Types</div>
                  <div className=" flex flex-col gap-[10px]">
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      <p className="text-lg ">All</p>
                    </div>

                    <div className="flex items-center gap-[10px]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      <p className="text-lg ">Income</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                      />
                      <p className="text-lg ">Expense</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px]  ">
                  <div className="text-2xl  flex justify-between">
                    <p>Category</p>
                    <p className="text-gray-300   ">Clear</p>
                  </div>
                  <div className="h-[32px]">
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>{" "}
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-[10px] justify-between">
                      <div className="flex gap-[20px]">
                        <img src="Leading icon (3).svg" alt="" />
                        <p className="text-lg ">Food & Drinks</p>
                      </div>
                      <img
                        className="w-[30px] h-[30px]"
                        src="Leading icon (5).svg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col gap-[16px] py-[24px]">
                      <div className="text-lg font-medium ">
                        <p>Amount Range</p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="h-[48px] rounded-lg border w-[50%] flex justify-center items-center">
                          0
                        </div>
                        <div className="h-[48px] border rounded-lg w-[50%] flex justify-center items-center">
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
                      <div className="w-full flex justify-between text-xs px-2">
                        <span>0</span>
                        <span>1000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[894px]  border border-black">
              <div className=" py-[50px]">
                {/* Content for the right side */}
                <div className="flex justify-between">
                  {/* Content 1 */}
                  <div className="flex items-center gap-[20px]">
                    {/* Your content here */}
                  </div>
                  {/* Content 2 */}
                  <div>{/* Your content here */}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal component */}
      <Modal isvisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
}

export default Records;
