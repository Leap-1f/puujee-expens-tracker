import Link from "next/link";
// import { useState } from "react";
function Records() {
  //   const [modalOpen, setModalOpen] = useState(false);

  //   const handleModalToggle = () => {
  //     setModalOpen(!modalOpen);
  //   };
  return (
    <div className="w-[100vw] h-[170vh] bg-gray-200 relative">
      <div>
        <div className="navbar px-[200px] h-[150px] bg-white">
          <div className="flex-1 ">
            <div className="flex  justify-center items-center gap-[50px]">
              <img className="w-[100px]" src="correct.svg" alt="" />

              <Link
                href={"/Dashboard"}
                className="btn btn-ghost text-2xl text-black"
              >
                Dashboard
              </Link>
              <Link
                href={"/Records"}
                className="btn btn-ghost text-2xl text-black"
              >
                Records
              </Link>
            </div>
          </div>
          <div className="flex-none gap-8">
            <div className="form-control">
              <div className="w-[200px] btn items-center flex justify-center text-2xl border border-white bg-blue-600 text-white h-[50px] rounded-3xl">
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
      </div>
      <div className="flex w-[100vw] h-[110vh] px-[200px] gap-[50px] py-[50px]">
        <div className=" bg-white border  p-[40px] rounded-3xl w-[27%] h-[140vh]">
          <div className="flex flex-col gap-[20px]">
            <p className="text-black font-bold text-4xl">Records</p>
            <Link
              href={"/Income"}
              className="btn my-[30px] h-[60px] rounded-3xl  text-white bg-blue-600 text-2xl     "
            >
              + Add
            </Link>
            <div className="flex-none gap-2 ">
              <div className="form-control   text-black">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-300 h-[60px] text-2xl rounded-2xl input input-bordered w-24 md:w-auto"
                />
              </div>
            </div>
            <div className="flex flex-col  gap-[30px] h-[200px]">
              <div className="text-2xl font-medium">Types</div>
              <div className=" flex flex-col gap-[20px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[20px] flex h-[20px] rounded-full border"></div>
                  <p className="text-xl ">All</p>
                </div>

                <div className="flex items-center gap-[10px]">
                  <div className="w-[20px] flex h-[20px] rounded-full border"></div>
                  <p className="text-xl ">Income</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div className="w-[20px] flex h-[20px] rounded-full border"></div>
                  <p className="text-xl ">Expense</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  gap-[30px] h-[600px]">
              <div className="text-2xl font-medium flex justify-between">
                <p>Category</p>
                <p className="text-gray-300  font-normal ">Clear</p>
              </div>
              <div className=" flex flex-col gap-[20px]">
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Food & Drinks</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Shopping</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Housing</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Transportation</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Vehicle</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Life & Entertainment</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Communication, PC</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Financial expenses</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Investments</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Income</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center gap-[10px] justify-between">
                  <div className="flex gap-[20px]">
                    <img src="Leading icon.svg" alt="" />
                    <p className="text-xl ">Others</p>
                  </div>
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (1).svg"
                    alt=""
                  />
                </div>
                <div className="flex items-center text-xl gap-[10px] ">
                  <img
                    className="w-[30px] h-[30px]"
                    src="Leading icon (3).svg"
                    alt=""
                  />
                  Add Category
                </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <div className="text-2xl font-medium ">
                  <p>Amount Range</p>
                </div>
                <div className="flex gap-5  ">
                  <div className="h-[50px] rounded-lg border w-[50%] flex justify-center items-center">
                    0
                  </div>
                  <div className="h-[50px] border rounded-lg w-[50%] flex justify-center items-center">
                    1000
                  </div>
                </div>
                <div>
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
        <div className="w-[70%] h-[120vh] py-[50px] ">
          <div className="flex justify-between">
            <div className="flex items-center gap-[20px]">
              <img
                className="w-[30px] h-[30px] bg-gray-400 border rounded-xl"
                src="icon (2).svg"
                alt=""
              />
              <p className="text-xl">Last 30 Days</p>
              <img
                className="w-[30px] h-[30px] bg-gray-400 border rounded-xl"
                src="icon (3).svg"
                alt=""
              />
            </div>
            <div>
              <select className="select w-full max-w-xs">
                <option disabled selected>
                  Newest First
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[100vw] h-[150vh] absolute top-0"></div> */}
    </div>
  );
}
export default Records;
