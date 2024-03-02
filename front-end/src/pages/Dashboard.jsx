import Link from "next/link";
import { Chart } from "chart.js";
function Dashboard() {
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] h-[1148px] fixed  bg-gray-100">
        <div className="navbar w-[100%] h-[100px] bg-white flex justify-between">
          <div className="flex  justify-center items-center gap-[24px]">
            <img className="w-[40px]" src="vector.png" alt="" />
            <Link
              href={"/Dashboard"}
              className="btn btn-ghost text-xl text-black"
            >
              Dashboard
            </Link>
            <Link
              href={"/Records"}
              className="btn btn-ghost text-xl text-black"
            >
              Records
            </Link>
          </div>

          <div className="flex-none gap-8">
            <div className="form-control">
              <div className="w-[200px] btn items-center flex justify-center text-xl border border-white bg-blue-600 text-white h-[50px] rounded-3xl">
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

        <div className="flex flex-col w-[100%] h-[90vh] gap-[50px] ">
          <div className="flex gap-[50px] ">
            <div className="flex flex-col w-[100%] h-[220px] bg-blue-600 p-[30px] border rounded-2xl">
              <img src="" alt="" />
              <h1>hello</h1>
            </div>
            <div className="flex flex-col w-[100%] h-[220px] bg-white  border rounded-2xl">
              <div className="border-b-2 h-[8vh] px-[40px] py-[15px] flex gap-[20px] items-center">
                <img src="greendot.svg" alt="" />
                <p className="font-medium text-black text-xl">Your income</p>
              </div>
              <div className="px-[40px] py-[20px] flex flex-col gap-[10px] ">
                <p className="text-3xl text-black font-bold">1,200,000₮</p>
                <p className="text-xl text-gray-400">Your income amount</p>
                <div className="flex items-center gap-[15px]">
                  <img className="w-[20px]" src="Leading icon (1).svg" alt="" />
                  <p className="text-xl text-black ">32% from last month</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[100%] h-[220px] bg-white  border rounded-2xl">
              <div className="border-b-2 h-[8vh] px-[40px] py-[15px] flex gap-[20px] items-center">
                <img src="bluedot.svg" alt="" />
                <p className="font-medium text-black text-xl">Total Expenses</p>
              </div>
              <div className="px-[40px] py-[20px] flex flex-col gap-[10px] ">
                <p className="text-3xl text-black font-bold">1,200,000₮</p>
                <p className="text-xl text-gray-400">Your income amount</p>
                <div className="flex items-center gap-[15px]">
                  <img className="w-[20px]" src="Leading icon (2).svg" alt="" />
                  <p className="text-xl text-black ">32% from last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[50px] w-[100%] h-[300px]   ">
            <div className="flex flex-col w-[50%] bg-white border  h-[300px]   rounded-2xl">
              <div className="border-b-2 h-[5vh] px-[40px] py-[20px] flex gap-[20px] items-center">
                <p className="font-semibold text-black text-xl">
                  Income - Expense
                </p>
                <div>
                  <canvas id="myChart"></canvas>
                  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[50%]  bg-white  h-[300px] border rounded-2xl ">
              <div className="border-b-2 h-[5vh] px-[40px] py-[20px] flex gap-[20px] items-center">
                <p className="font-semibold text-black text-xl">
                  Income - Expense
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[50px] w-[100%] ]">
            <div className="flex flex-col w-[100%] h-[55vh] bg-white border rounded-2xl ">
              <div className="border-b-2 h-[5vh] px-[40px] py-[20px] flex gap-[20px] items-center">
                <p className="font-semibold text-black text-xl">Last Records</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
