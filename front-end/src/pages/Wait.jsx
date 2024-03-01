import Link from "next/link";

function Wait() {
  return (
    <Link
      href={{
        pathname: "/Currency",
      }}
    >
      <div className="w-[100vw] h-[100vh] bg-white">
        <div className="flex flex-col justify-center items-center gap-[40px] p-[500px]">
          <div className="flex items-center gap-[10px]">
            <img className="w-[30px] h-[30px]" src="vector.png" alt="" />
            <h1 className="flex  justify-center  text-3xl font-medium text-black">
              Geld
            </h1>
          </div>
          <span className="loading loading-lg loading-spinner text-info "></span>
          <p className="text-black">Түр хүлээнэ үү</p>
        </div>
      </div>
    </Link>
  );
}
export default Wait;
