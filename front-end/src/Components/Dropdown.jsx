import { useState } from "react";
// import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center border border-gray-400 rounded-xl w-[350px] h-[60px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-gray-100 p-4 w-full rounded-xl flex justify-between text-md  border border-transparent active:border-blue-500 active:text-blue-500 duration-200"
      >
        <div className="text-gray-400">Find or choose category</div>
        <img src="arrow_drop_down.svg" alt="" />
        {/* {isOpen ? (
            
        ) : (
          <AiOutlineCaretDown className="h-8" />
        )} */}
      </button>

      {isOpen && (
        <div className="bg-gray-100 shadow-2xl absolute top-20 flex flex-col items-start rounded-lg p-2 w-full ">
          <div className="flex w-full flex-col cursor-pointer overflow-x-hidden overflow-y-auto snap-y">
            <div className="flex w-[350px] items-center gap-[25px] h-[56px] border-b-2 border-black hover:underline border-l-transparent hover:border-l-blue-500 border-l-4 tracking-wider  ">
              <img src="PlusCircle.svg" alt="" />
              <div>
                <p className="font-semibold">Add Category</p>
              </div>
            </div>
            <div className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent  hover:border-l-blue-500  border-l-4 tracking-wider">
              <img src="House.svg" alt="" />
              <div>
                <p>Home</p>
              </div>
            </div>
            <div className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent hover:border-l-[#FF4545] border-l-4 tracking-wider">
              <img src="Gift.svg" alt="" />
              <div>
                <p>Gift</p>
              </div>
            </div>
            <div className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent hover:border-l-[#FB8A22] border-l-4 tracking-wider ">
              <img src="ForkKnife.svg" alt="" />
              <div>
                <p>Food</p>
              </div>
            </div>
            <div className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent hover:border-l-[#A804AB] border-l-4 tracking-wider">
              <img src="Wine.svg" alt="" />
              <div>
                <p>Drink</p>
              </div>
            </div>
            <div className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent hover:border-l-[#EAB308] border-l-4 tracking-wider">
              <img src="Taxi.svg" alt="" />
              <div>
                <p>Taxi</p>
              </div>
            </div>{" "}
            <div className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent hover:border-l-[#6F6CF3] border-l-4 tracking-wider">
              <img src="TShirt.svg" alt="" />
              <div>
                <p>Shoppping</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
