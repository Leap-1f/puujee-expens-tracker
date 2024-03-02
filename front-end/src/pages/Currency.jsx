import Link from "next/link";
function Currency() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white ">
      <div className="flex flex-col justify-center items-center gap-[100px]">
        <div className="flex flex-col justify-center items-center gap-[30px] p-[60px]">
          <div className="flex items-center gap-[10px]">
            <img className="w-[30px] h-[30px]" src="vector.png" alt="" />
            <h1 className="flex  justify-center  text-3xl font-medium text-black">
              Geld
            </h1>
          </div>
          <ul className="steps w-[20vw]">
            <li className="step step-info">Currecy</li>
            <li className="step ">Balance</li>

            <li className="step ">Finish</li>
          </ul>
        </div>
        <div className="w-[25vw] h-[40vh]  gap-[20px] p-[20px] flex flex-col items-center">
          <img className="w-[150px] " src="cash.svg" alt="" />
          <p className="text-2xl text-black font-bold">Select base Currency</p>
          <div>
            <select class="select select-primary bg-gray-300 text-black text-xl  w-[100%] h-[50px] ">
              <option disabled selected>
                Та валютаа сонгоно уу?
              </option>
              <option>MNT-Mongolian Tugrik</option>
              <option>USA-Dollar</option>
              <option>RUS-Ruble</option>
            </select>
            <p className="py-[20px] text-black text-lg">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one
            </p>
            <Link
              href={"/Balance"}
              className="btn my-[30px] h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl "
            >
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Currency;
