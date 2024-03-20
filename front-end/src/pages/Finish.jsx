import Link from "next/link";
import { Geld } from "@/components/Icon";
function Finish() {
  return (
    <div className="flex flex-col w-[100%] h-[100vh] justify-center items-center gap-[100px] bg-white">
      <div className="flex flex-col justify-center items-center gap-[30px] pt-[40px]">
        <div className="flex items-center gap-[10px]">
          <Geld width="94" heigth="36"></Geld>
        </div>
        <ul className="steps w-[20vw] tracking-wide text-black">
          <li className="step step-info ">Currecy</li>
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
            <p className=" text-black text-[12px] pt-[12px] text-center tracking-wide">
              Таны анхны бүртгэл амжилттай үүсгэгдлээ.
            </p>
          </div>
          <Link
            href={"/Login"}
            className="btn h-[50px] rounded-[20px]  w-[100%] text-white bg-blue-500 text-xl tracking-wide"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Finish;
