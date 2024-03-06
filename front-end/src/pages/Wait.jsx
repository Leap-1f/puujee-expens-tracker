import Link from "next/link";

function Wait() {
  return (
    <Link
      href={{
        pathname: "/Currency",
      }}
    >
      <div className="w-[1440x] h-[100vh] flex justify-center">
        <div className="flex items-center justify-center flex-col gap-[48px]">
          <div className="flex p-[10px] items-center gap-[17px]">
            <img className="w-[44px] h-[44px]" src="vector.png" alt="" />
            <img className="w-[90px] h-[31px]" src="Geld (3).svg" alt="" />
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <span className="loading loading-lg loading-spinner text-info "></span>
            <p className="text-black text-[16px]">Түр хүлээнэ үү</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default Wait;
