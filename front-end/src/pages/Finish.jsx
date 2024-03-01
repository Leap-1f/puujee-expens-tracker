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
            <li className="step  step-info">Balance</li>

            <li className="step step-info ">Finish</li>
          </ul>
        </div>
        <div className="w-[25vw] h-[40vh]   flex flex-col items-center">
          <img className="w-[150px] " src="correct.svg" alt="" />

          <p className="py-[20px]  text-black text-5xl font-bold">Good Job!</p>
          <p className="text-2xl text-gray-600 ">
            Your very first account has been created. Now <br /> continue to
            dashboard and start tracking
          </p>
          <p className="text-2xl text-gray-600 items-center"></p>
          <div>
            <Link
              href={"/Dashboard"}
              className="btn my-[30px] h-[60px] rounded-3xl  w-[500px] text-white bg-blue-600 text-2xl     "
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Balance;
