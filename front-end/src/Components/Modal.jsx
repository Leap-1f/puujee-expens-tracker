import React from "react";

function Modal({ isvisible, onClose }) {
  if (!isvisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center glass justify-center">
      <div className="w-[50%] h-[50%] flex flex-col bg-white rounded-lg ">
        <div className="border-b-2 h-[6vh] p-[50px] flex items-center justify-between">
          <p className="text-3xl text-black font-medium">Add Record</p>

          <img
            className="text-black w-[30px] "
            onClick={onClose}
            src="X.svg"
            alt=""
          />
        </div>
        <div className="p-[30px] h-[670px] flex gap-[24px]">
          <div className="border flex w-[50%] gap-[30px] flex-col  ">
            <div className="flex flex-col gap-[20px] ">
              <div className="flex gap-[20px]">
                <div className="w-[330px] rounded-3xl text-xl border h-[60px] flex justify-center items-center btn text-white bg-blue-600">
                  Expense
                </div>
                <div className="w-[330px] border rounded-3xl h-[60px] text-xl  flex justify-center btn items-center text-white bg-blue-600">
                  Income
                </div>
              </div>
              <div className="w-[680px] border-gray-600  h-[150px] bg-gray-100 rounded-2xl border flex flex-col p-[30px]">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-2xl text-black ">Amount</p>
                  <p className="text-3xl">₮000.00</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[50px]">
              <div className="flex flex-col gap-[20px] h-[80px] ">
                <p className="text-2xl text-black">Category</p>
                <select class="select select-primary bg-gray-100 text-black text-2xl  w-[100%] h-[70px] ">
                  <option disabled selected>
                    Choose
                  </option>
                  <option>MNT-Mongolian Tugrik</option>
                  <option>USA-Dollar</option>
                  <option>RUS-Ruble</option>
                </select>
              </div>
              <div className="flex w-[100%] gap-[85px]">
                <div className="flex flex-col w-[50%]  ">
                  <div className="flex ">
                    <div className="flex flex-col gap-[20px]">
                      <p className="text-2xl text-black"> Date</p>
                      <select class="select select-primary bg-gray-100 text-black text-2xl   ">
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
                <div className="flex flex-col w-[50%]  ">
                  <div className="flex gap-[30px]">
                    <div className="flex flex-col gap-[20px]">
                      <p className="text-2xl text-black"> Date</p>
                      <select class="select select-primary bg-gray-100 text-black text-2xl   ">
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
            </div>
            <button className="btn h-[60px] rounded-3xl text-white bg-blue-600 text-2xl">
              + Add Record
            </button>
          </div>
          <div className="border w-[50%] flex flex-col gap-[50px]">
            <div>
              {" "}
              <div className="flex flex-col gap-[20px] h-[80px] ">
                <p className="text-2xl text-black"> Payee</p>
                <select class="select select-primary bg-gray-100 text-black text-2xl  w-[100%] h-[20%] ">
                  <option disabled selected>
                    Write here
                  </option>
                  <option>MNT-Mongolian Tugrik</option>
                  <option>USA-Dollar</option>
                  <option>RUS-Ruble</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] h-[80px] ">
              <p>Note</p>
              <textarea
                className="textarea textarea-error"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
