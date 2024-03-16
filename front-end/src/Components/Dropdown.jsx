import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Define an array of category objects
  const categories = [
    { icon: "PlusCircle.svg", name: "Add Category" },
    { icon: "House.svg", name: "Home" },
    { icon: "Gift.svg", name: "Gift" },
    { icon: "ForkKnife.svg", name: "Food" },
    { icon: "Wine.svg", name: "Drink" },
    { icon: "Taxi.svg", name: "Taxi" },
    { icon: "TShirt.svg", name: "Shopping" },
  ];

  return (
    <div className="relative flex flex-col items-center border border-gray-400 rounded-xl w-[350px] h-[60px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-gray-100 p-4 w-full rounded-xl h-[60px] flex justify-between text-md  border border-transparent active:border-blue-500 active:text-blue-500 duration-300 avtive:text-blue-500"
      >
        <p className="text-gray-400">Find or choose category</p>

        {isOpen ? (
          <AiOutlineCaretDown className="h-[24px]" />
        ) : (
          <AiOutlineCaretUp className="h-[24px]" />
        )}
      </button>

      {isOpen && (
        <div className="bg-gray-100 shadow-2xl absolute top-[65px] flex flex-col items-start rounded-lg p-2 w-full ">
          <div className="flex w-full flex-col cursor-pointer overflow-x-hiddenoverflow-y-auto snap-y">
            {/* Map over the categories array to render each category */}
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex w-[350px] items-center gap-[25px] h-[40px] hover:underline  hover:underline-offset-8  border-l-transparent hover:border-l-${
                  category.color || "blue-500" || "red" || "green"
                } border-l-4 tracking-wider`}
              >
                <img src={category.icon} alt="" />
                <div>
                  <p>{category.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
