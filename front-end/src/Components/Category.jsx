import Link from "next/link";
import React from "react";
import Frame from "./Frame";
import { useState } from "react";

function Category({ isvisible, onClose }) {
  if (!isvisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center glass justify-center">
      <div className="w-[494px] h-[236px] flex flex-col bg-white rounded-lg">
        <div className="border-b-2 flex h-[68px] px-[24px] py-[20px] items-center justify-between">
          <p className="text-[20px] text-black font-medium">Add Category</p>

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
        <div className="p-[24px]">
          <div className="w-[446px] h-[120px] flex flex-col gap-[30px]">
            <div className="flex justify-between">
              <Frame></Frame>
              <div className="w-[350px] h-[48px]  p-[16px] flex items-center justify-between border-2 bg-gray-100 border-gray-300 rounded-xl">
                <input
                  type="text"
                  placeholder="name"
                  className="bg-gray-100 w-[350px]"
                ></input>
              </div>
            </div>
            <button className="w-[446px] h-[40px] border bg-green-500 rounded-xl tracking-wide text-white hover:shadow-xl  ">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
