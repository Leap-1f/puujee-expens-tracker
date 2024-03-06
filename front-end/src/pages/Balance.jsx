import Link from "next/link";
function Balance() {
  return (
    <div className="flex flex-col w-[100%] h-[100vh]  items-center gap-[100px] bg-white">
      <div className="flex flex-col justify-center items-center gap-[30px] pt-[40px]">
        <div className="flex items-center gap-[10px]">
          <img className="w-[27px] h-[27px]" src="vector.png" alt="" />
          <img className="w-[56px] h-[19px]" src="Geld (3).svg" alt="" />
        </div>
        <ul className="steps w-[20vw]">
          <li className="step step-info">Currecy</li>
          <li className="step step-info">Balance</li>

          <li className="step ">Finish</li>
        </ul>
      </div>
      <div className="w-[384px] h-[304px]  gap-[24px]  flex flex-col items-center">
        <div className="flex flex-col gap-[16px] items-center justify-center">
          <img className="w-[48px] h-[48px] " src="cash.svg" alt="" />

          <p className="text-[24px] text-black font-bold">
            Set up your cash Balance
          </p>
        </div>
        <div className="flex flex-col gap-[32px]">
          <div>
            <label className="input input-bordered flex items-center gap-2 h-[50px] w-[384px] border-gray-500 bg-gray-200 border text-black">
              <input type="text" className="grow" placeholder="Email" />{" "}
            </label>
            <p className=" text-black text-[12px] pt-[12px] ">
              How much cash do you have in your wallet?
            </p>
          </div>
          <Link
            href={"/Finish"}
            className="btn h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl "
          >
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Balance;
