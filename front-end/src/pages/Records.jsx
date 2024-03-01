import Link from "next/link";
import { Fragment, useState } from "react";
import Modal from "@/Components/Modal";

function Records() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="w-screen min-h-screen bg-gray-200 relative">
        <div>
          <div className="navbar px-[200px] h-[150px] bg-white">
            <div className="flex-1 ">
              <div className="flex  justify-center items-center gap-[50px]">
                <img className="w-[40px]" src="vector.png" alt="" />
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
        <div className="flex w-screen h-[110vh] px-[200px] gap-[50px] py-[50px]">
          <div className="bg-white border p-[40px] rounded-3xl w-[27%] h-[140vh]">
            <div className="flex flex-col gap-[20px]">
              <p className="text-black font-bold text-4xl">Records</p>
              <button
                className="btn my-[30px] h-[60px] rounded-3xl text-white bg-blue-600 text-2xl"
                onClick={() => setShowModal(true)}
              >
                + Add
              </button>
              {/* Search input */}
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-300 h-[60px] text-2xl rounded-2xl input input-bordered"
                />
              </div>
              {/* Category */}
              {/* Your category content here */}
              {/* Amount Range */}
              {/* Your amount range content here */}
            </div>
          </div>
          <div className="w-[70%] h-[120vh] py-[50px]">
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
      {/* Modal component */}
      <Modal isvisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
}

export default Records;
