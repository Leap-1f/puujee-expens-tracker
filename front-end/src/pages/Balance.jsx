import Link from "next/link";
function Balance() {
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
            <li className="step step-info ">Balance</li>

            <li className="step ">Finish</li>
          </ul>
        </div>
        <div className="w-[25vw] h-[40vh]  gap-[30px] p-[20px] flex flex-col items-center">
          <img className="w-[150px] " src="cash.svg" alt="" />
          <p className="text-4xl text-black font-bold">
            Set up your cash Balance
          </p>
          <div>
            <label className="input input-bordered flex items-center gap-2 h-[70px] w-[700px] border-gray-500 bg-gray-200 border text-black">
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <p className="py-[20px] text-black text-xl ">
              How much cash do you have in your wallet?
            </p>
            <Link
              href={"/Finish"}
              className="btn my-[60px] h-[60px] rounded-3xl  w-[100%] text-white bg-blue-500 text-2xl "
            >
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Balance;
