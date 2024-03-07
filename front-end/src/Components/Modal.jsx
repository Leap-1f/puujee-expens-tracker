import Link from "next/link";
import React from "react";

function Modal({ isvisible, onClose }) {
  if (!isvisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center glass justify-center">
      <div className="w-[792px] h-[512px] flex flex-col bg-white rounded-lg">
        <div className="border-b-2 flex h-[68px] px-[24px] py-[20px] items-center justify-between">
          <p className="text-[20px] text-black font-medium">Add Record</p>

          <button onClick={onClose} className="btn btn-square btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[24px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          <div className="flex h-[400px] w-[400px] gap-[20px] flex-col">
            <div className="flex flex-col gap-[32px] p-[24px]">
              <div className="flex gap-[10px]">
                <div className="w-[172px] h-[35px] rounded-3xl text-lg flex justify-center items-center btn text-white bg-blue-600">
                  Expense
                </div>
                <Link
                  className="w-[172px] h-[35px] rounded-3xl text-lg flex justify-center items-center btn text-white bg-gray-400"
                  href={{
                    pathname: "/Modal2",
                  }}
                >
                  Income
                </Link>
              </div>
              <input
                type="number"
                placeholder="Amount "
                className="w-[348px] border-gray-400 h-[76px] bg-gray-100 rounded-2xl border flex flex-col p-[10px]"
              >
                {/* <div className="flex flex-col">
                  <p className="text-md text-black">Amount</p>
                  <p className="text-sm text-gray-400">₮000.00</p>
                </div> */}
              </input>

              <div className="flex flex-col gap-[20px] justify-center items-center">
                <div className="flex flex-col gap-[0px] h-[80px] w-[348px]">
                  <select className="select select-primary bg-gray-100 text-gray-500 border-gray-400 text-sm w-[348px] h-[48px]">
                    <option disabled selected>
                      Find or choose category
                    </option>
                    <option className="h-[56px] w-[360px] border flex  ">
                      <img src="PlusCircle.svg" alt="" />
                      <p> Add Category</p>
                    </option>
                    <option>USA-Dollar</option>
                    <option>RUS-Ruble</option>
                  </select>
                </div>
                <div className="flex 400px gap-[10px]">
                  <div className="flex flex-col w-[168px]">
                    <div className="flex flex-col">
                      <select className="select select-primary bg-gray-100 text-gray-500 border-gray-400 text-sm">
                        <option disabled selected>
                          Oct 30, 2023
                        </option>
                        <option>MNT-Mongolian Tugrik</option>
                        <option>USA-Dollar</option>
                        <option>RUS-Ruble</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col w-[168px]">
                    <div className="flex flex-col">
                      <select className="select select-primary bg-gray-100 text-gray-500 border-gray-400 text-sm">
                        <option disabled selected>
                          4:15 PM
                        </option>
                        <option>MNT-Mongolian Tugrik</option>
                        <option>USA-Dollar</option>
                        <option>RUS-Ruble</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button className="h-[40px] rounded-lg text-white bg-blue-600 ">
                Add Records
              </button>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-[48px] pb-[22px] pt-[23px] px-[24px]">
            <div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-lg text-black">Payee</p>
                <select className="select select-primary bg-gray-100 text-sm text-gray-600 border-gray-400 w-[348px] h-[48px]">
                  <option disabled selected>
                    Write here
                  </option>
                  <option>MNT-Mongolian Tugrik</option>
                  <option>USA-Dollar</option>
                  <option>RUS-Ruble</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-black"></p>
              <textarea
                className="w-[348px] h-[280px] border-gray-400 bg-gray-100 border rounded-xl p-[20px]"
                placeholder="Write here"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
