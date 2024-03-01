import Link from "next/link";
// import { useState } from "react";
function Records() {
  //   const [modalOpen, setModalOpen] = useState(false);

  //   const handleModalToggle = () => {
  //     setModalOpen(!modalOpen);
  //   };
  return (
    <div className="w-[100vw] h-[150vh] bg-gray-200 relative">
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
              <div className=" items-center flex justify-center text-2xl border border-white bg-blue-600 text-white h-[50px] rounded-3xl">
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
      <div className="flex w-[100vw] h-[90vh] px-[200px] gap-[50px] py-[50px]">
        <div className=" bg-white border  p-[40px] rounded-3xl w-[27%] h-[120vh]">
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
                  className="bg-gray-300 h-[70px] text-2xl rounded-2xl input input-bordered w-24 md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[120vh] "></div>
      </div>
      {/* <div className="w-[100vw] h-[150vh] absolute top-0"></div> */}
    </div>
  );
}
export default Records;
