import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Modal({ isvisible, onClose }) {
  const [activeTab, setActiveTab] = useState("Expense");
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
                <div
                  className={`w-[172px] h-[35px] rounded-3xl text-[16px] flex justify-center items-center btn btn-active text-white ${
                    activeTab === "Expense" ? "bg-blue-600" : "text-black"
                  }`}
                  onClick={() => setActiveTab("Expense")}
                >
                  Expense
                </div>
                <div>
                  <p
                    className={`w-[172px] h-[35px] rounded-3xl text-[16px] flex justify-center btn items-center btn-active text-white ${
                      activeTab === "Income" ? "bg-green-600" : " text-black"
                    }`}
                    onClick={() => setActiveTab("Income")}
                  >
                    Income
                  </p>
                </div>
              </div>
              <input
                type="number"
                placeholder="Amount "
                className="w-[348px] border-gray-400 h-[76px] bg-gray-100 rounded-2xl border flex flex-col p-[10px] "
                onClick={() => setActiveTab("Income")}
              ></input>

              <div className="flex flex-col gap-[20px] justify-center items-center">
                <div className="flex flex-col gap-[0px] h-[80px] w-[348px] justify-center">
                  <Dropdown></Dropdown>
                </div>
                <div className="flex 400px gap-[10px]">
                  <div className="flex 400px gap-[10px]">
                    <div className="flex flex-col w-[168px]">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        className={`input input-bordered ${
                          activeTab === "Income"
                            ? "border-green-600"
                            : "text-black" || activeTab === "Expense"
                            ? " border-blue-600"
                            : "text-black"
                        }`}
                        onClick={() => setActiveTab("Income")}
                        min="2018-01-01"
                        max="2018-12-31"
                      />
                    </div>
                    <div className="flex flex-col w-[168px]">
                      <label
                        htmlFor="time"
                        className="text-gray-200 text-sm"
                      ></label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        className={`input input-bordered ${
                          activeTab === "Income"
                            ? "border-green-600"
                            : "text-black" || activeTab === "Expense"
                            ? " border-blue-600"
                            : "text-black"
                        }`}
                        onClick={() => setActiveTab("Income")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={`h-[40px] rounded-lg text-white ${
                  activeTab === "Expense" ? "bg-blue-600" : "bg-green-600"
                }`}
              >
                Add Records
              </button>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-[48px] pb-[22px] pt-[23px] px-[24px]">
            <div>
              <div className="flex flex-col gap-[4px]">
                <p className="text-lg text-black">Payee</p>
                <select
                  className={`select select-primary bg-gray-100 text-sm text-gray-600 border-gray-400 w-[348px] h-[48px] ${
                    activeTab === "Income"
                      ? "border-green-600"
                      : "text-black" || activeTab === "Expense"
                      ? " border-blue-600"
                      : "text-black"
                  }`}
                >
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
                className={`w-[348px] h-[280px] border-gray-400 bg-gray-100 border rounded-xl p-[20px] ${
                  activeTab === "Income"
                    ? "border-green-600"
                    : " text-black " || activeTab === "Expense"
                    ? " border-blue-600"
                    : "text-black"
                }`}
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
