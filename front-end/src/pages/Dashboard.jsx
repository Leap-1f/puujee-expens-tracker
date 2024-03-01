import Link from "next/link";
function Dashboard() {
  return (
    <div className="w-[100vw] h-[170vh] bg-gray-100">
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

        <div className="flex flex-col w-[100vw] h-[90vh]  ">
          <div className="flex gap-[50px] w-[100vw] h-[35vh] px-[200px] py-[70px]">
            <div className="flex flex-col w-[32%] h-[35vh] bg-blue-600 p-[30px] border rounded-2xl">
              <img src="" alt="" />
              <h1>hello</h1>
            </div>
            <div className="flex flex-col w-[32%] h-[35vh] bg-white  border rounded-2xl">
              <div className="border-b-2 h-[8vh] px-[40px] py-[20px] flex gap-[20px] items-center">
                <img src="greendot.svg" alt="" />
                <p className="font-medium">Your income</p>
              </div>
              <div className="px-[40px] py-[20px] flex flex-col gap-[20px] items-center">
                <p></p>
                <p className="text-2xl text-gray-400">Your income amount</p>
              </div>
            </div>
            <div className="flex flex-col w-[32%] h-[35vh] bg-white  border rounded-2xl">
              <div className="border-b-2 h-[8vh] px-[40px] py-[20px] flex gap-[20px] items-center">
                <img src="bluedot.svg" alt="" />
                <p className="font-medium">Your Expenses</p>
              </div>
              <div className="px-[40px] py-[20px] flex flex-col gap-[20px] items-center">
                <p></p>
                <p className="text-2xl text-gray-400">Your income amount</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[50px] w-[100vw] h-[40vh] px-[200px] py-[100px] ">
            <div className="flex flex-col w-[50%] h-[40vh] bg-white border   rounded-2xl">
              <div className="border-b-2 h-[7vh] px-[40px] py-[20px] flex gap-[20px] items-center">
                <p className="font-semibold">Income - Expense</p>
              </div>
            </div>
            <div className="flex flex-col w-[50%] h-[40vh] bg-white  border rounded-2xl ">
              <div className="border-b-2 h-[7vh] px-[40px] py-[20px] flex gap-[20px] items-center">
                <p className="font-semibold">Income - Expense</p>
              </div>
            </div>
          </div>
          <div className="flex gap-[50px] w-[100vw]  px-[200px] py-[130px]">
            <div className="flex flex-col w-[100%] h-[55vh] bg-white border rounded-2xl ">
              <div className="border-b-2 h-[7vh] px-[40px] py-[20px] flex gap-[20px] items-center">
                <p className="font-semibold text-xl">Last Records</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  s;
}
export default Dashboard;
