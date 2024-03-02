import React from "react";

function Modal({ isvisible, onClose }) {
  if (!isvisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center glass justify-center">
      <div className="w-[888px] h-[512px] flex flex-col bg-white rounded-lg ">
        <div className="border-b-2 flex h-[2vh] px-[24px] py-[30px] items-center justify-between">
          <p className="text-2xl text-black font-medium">Add Record</p>

          <img
            className="text-black w-[30px] "
            onClick={onClose}
            src="X.svg"
            alt=""
          />
        </div>
        <div className="p-[30px]  flex gap-[24px]">
          <div className=" flex h-[400px] w-[400px] gap-[20px] flex-col  ">
            <div className="flex flex-col gap-[20px] ">
              <div className="flex gap-[10px]">
                <div className="w-[195px] rounded-3xl text-xl border h-[40px] flex justify-center items-center btn text-white bg-blue-600">
                  Expense
                </div>
                <div className="w-[195px] border rounded-3xl h-[40px] text-xl  flex justify-center btn items-center text-white bg-gray-300">
                  Income
                </div>
              </div>
              <div className="w-[400px] border-gray-600  h-[76px] bg-gray-100 rounded-2xl border flex flex-col px-[10px]">
                <div className="flex flex-col ">
                  <p className="text-lg text-black ">Amount</p>
                  <p className="text-xl text-gray-400">₮000.00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[0px] h-[80px] ">
                <p className="text-xl text-black">Category</p>
                <select class="select select-primary bg-gray-100 text-gray-500 border-gray-400 text-xl  w-[100%] h-[70px] ">
                  <option disabled selected>
                    Choose
                  </option>
                  <option>MNT-Mongolian Tugrik</option>
                  <option>USA-Dollar</option>
                  <option>RUS-Ruble</option>
                </select>
              </div>
              <div className="flex 400px gap-[10px]">
                <div className="flex flex-col w-[190px]  ">
                  <div className="flex flex-col ">
                    <p className="text-xl text-black"> Date</p>
                    <select class="select select-primary bg-gray-100 text-gray-500 border-gray-400 text-lg   ">
                      <option disabled selected>
                        Oct 30, 2023
                      </option>
                      <option>MNT-Mongolian Tugrik</option>
                      <option>USA-Dollar</option>
                      <option>RUS-Ruble</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-[190px]  ">
                  <div className="flex flex-col ">
                    <p className="text-xl text-black"> Date</p>
                    <select class="select select-primary bg-gray-100 text-gray-500 border-gray-400 text-lg   ">
                      <option disabled selected>
                        Oct 30, 2023
                      </option>
                      <option>MNT-Mongolian Tugrik</option>
                      <option>USA-Dollar</option>
                      <option>RUS-Ruble</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button className=" h-[35px] rounded-lg text-white bg-blue-600 ">
              Add Records
            </button>
          </div>
          <div className=" w-[50%] flex flex-col gap-[40px]">
            <div>
              {" "}
              <div className="flex flex-col gap-[10px] h-[80px] ">
                <p className="text-xl text-black"> Payee</p>
                <select class="select select-primary bg-gray-100 text-xl text-gray-600 border-gray-400 w-[100%] h-[20%] ">
                  <option disabled selected>
                    Write here
                  </option>
                  <option>MNT-Mongolian Tugrik</option>
                  <option>USA-Dollar</option>
                  <option>RUS-Ruble</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]  ">
              <p className="text-xl text-black">Note</p>
              <div className="w-[100%] h-[200px] border-gray-400 bg-gray-100 border rounded-xl "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
