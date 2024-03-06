import Link from "next/link";
function Finish() {
  return (
    <div className="flex flex-col w-[100%] h-[100vh]  items-center gap-[100px] bg-white">
      <div className="flex flex-col justify-center items-center gap-[30px] pt-[40px]">
        <div className="flex items-center gap-[10px]">
          <img className="w-[27px] h-[27px]" src="vector.png" alt="" />
          <img className="w-[56px] h-[19px]" src="Geld (3).svg" alt="" />
        </div>
        <ul className="steps w-[20vw] text-black">
          <li className="step step-info">Currecy</li>
          <li className="step step-info">Balance</li>

          <li className="step step-info ">Finish</li>
        </ul>
      </div>
      <div className="w-[384px] h-[304px]  gap-[24px]  flex flex-col items-center">
        <div className="flex flex-col gap-[16px] items-center justify-center">
          <img className="w-[48px] h-[48px] " src="correct.svg" alt="" />

          <p className="text-[24px] text-black font-bold">Good Job!</p>
        </div>
        <div className="flex flex-col gap-[32px] ">
          <div>
            <p className=" text-black text-[12px] pt-[12px] text-center">
              Your very first account has been created. Now continue to
              dashboard and start tracking
            </p>
          </div>
          <Link
            href={"/Dashboard"}
            className="btn h-[50px] rounded-[20px]  w-[100%] text-white bg-blue-500 text-xl "
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Finish;
