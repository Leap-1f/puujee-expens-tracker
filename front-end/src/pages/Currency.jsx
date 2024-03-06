import Link from "next/link";
function Currency() {
  return (
    <div className="flex flex-col w-[100%] h-[100vh]  items-center gap-[100px] bg-white">
      <div className="flex flex-col justify-center items-center gap-[30px] pt-[40px]">
        <div className="flex items-center gap-[10px]">
          <img className="w-[27px] h-[27px]" src="vector.png" alt="" />
          <img className="w-[56px] h-[19px]" src="Geld (3).svg" alt="" />
        </div>
        <ul className="steps w-[20vw]">
          <li className="step step-info">Currecy</li>
          <li className="step ">Balance</li>

          <li className="step ">Finish</li>
        </ul>
      </div>
      <div className="w-[384px] h-[304px]  gap-[24px]  flex flex-col items-center">
        <div className="flex flex-col gap-[16px] items-center justify-center">
          <img className="w-[48px] h-[48px] " src="cash.svg" alt="" />

          <p className="text-[24px] text-black font-bold">
            Select base Currency
          </p>
        </div>
        <div className="flex flex-col gap-[32px]">
          <div>
            <select class="select select-primary bg-gray-300 text-black text-md w-[384px] h-[64px] ">
              <option disabled selected>
                Та валютаа сонгоно уу?
              </option>
              <option>MNT-Mongolian Tugrik</option>
              <option>USA-Dollar</option>
              <option>RUS-Ruble</option>
            </select>
            <p className=" text-black text-[12px] pt-[12px]">
              Таны үндсэн валют нь таны хамгийн их ашигладаг мөнгөн тэмдэгт байх
              ёстой. Бусад валютаар хийх бүх гүйлгээг үүн дээр үндэслэн тооцохыг
              анхаарна уу?
            </p>
          </div>
          <Link
            href={"/Balance"}
            className="btn h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl "
          >
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Currency;
