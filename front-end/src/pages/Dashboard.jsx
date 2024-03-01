import Link from "next/link";
function Dashboard() {
  return (
    <div className="w-[100vw] h-[170vh] bg-gray-100">
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

        <div className="flex flex-col w-[100vw] h-[90vh]  ">
          <div className="flex gap-[50px] w-[100vw] h-[35vh] px-[200px] py-[100px]">
            <div className="flex flex-col w-[32%] h-[35vh] bg-blue-600 btn border rounded-2xl">
              <h1>hello</h1>
            </div>
            <div className="flex flex-col w-[32%] h-[35vh] bg-white  border rounded-2xl">
              <div></div>
            </div>
            <div className="flex flex-col w-[32%] h-[35vh] bg-white  border rounded-2xl"></div>
          </div>
          <div className="flex gap-[50px] w-[100vw] h-[35vh] px-[200px] py-[150px] ">
            <div className="flex flex-col w-[50%] h-[35vh] bg-white border   rounded-2xl"></div>
            <div className="flex flex-col w-[50%] h-[35vh] bg-white  border rounded-2xl "></div>
          </div>
          <div className="flex gap-[50px] w-[100vw]  px-[200px] py-[200px]">
            <div className="flex flex-col w-[100%] h-[55vh] bg-white border rounded-2xl "></div>
          </div>
        </div>
      </div>
    </div>
  );
  s;
}
export default Dashboard;
