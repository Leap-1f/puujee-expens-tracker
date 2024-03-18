import { Fragment, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Category from "./Category";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <Fragment>
      <div className="relative flex flex-col items-center  rounded-xl w-[350px] h-[60px]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-gray-100 p-4 w-full rounded-xl h-[60px] text-black flex justify-between text-md    active:border-blue-500 active:text-blue-500 duration-300 avtive:text-blue-500"
        >
          <p className="text-gray-400">
            {selectedCategory ? selectedCategory : "Find or choose category"}
          </p>
          {isOpen ? (
            <AiOutlineCaretDown className="h-[24px]" />
          ) : (
            <AiOutlineCaretUp className="h-[24px]" />
          )}
        </button>
        {isOpen && (
          <div className="bg-gray-100 shadow-2xl absolute top-[65px] flex flex-col items-start rounded-lg p-2 w-full ">
            <div className="flex w-full flex-col cursor-pointer overflow-x-hidden overflow-y-auto snap-y text-black">
              <div
                className="flex w-[350px] items-center gap-[25px] h-[50px]  border-black hover:underline border-l-transparent  hover:border-l-blue-500 border-l-4 tracking-wider  "
                onClick={() => setShowModal(true)}
              >
                <img src="PlusCircle.svg" alt="" />
                <div>
                  <p className="font-semibold">Add Category</p>
                </div>
              </div>
              <div
                className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent  hover:border-l-blue-500  border-l-4 tracking-wider"
                onClick={() => handleCategorySelect("Home")}
              >
                <img src="House.svg" alt="" />
                <div>
                  <p>Home</p>
                </div>
              </div>
              <div
                className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent  hover:border-l-[#FF4545] border-l-4  border-l-4 tracking-wider"
                onClick={() => handleCategorySelect("Gift")}
              >
                <img src="Gift.svg" alt="" />
                <div>
                  <p>Gift</p>
                </div>
              </div>
              <div
                className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent  hover:border-l-[#FB8A22] border-l-4 tracking-wider"
                onClick={() => handleCategorySelect("Food")}
              >
                <img src="ForkKnife.svg" alt="" />
                <div>
                  <p>Food</p>
                </div>
              </div>
              <div
                className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent   hover:border-l-[#A804AB] border-l-4  tracking-wider"
                onClick={() => handleCategorySelect("Drink")}
              >
                <img src="Wine.svg" alt="" />
                <div>
                  <p>Drink</p>
                </div>
              </div>
              <div
                className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent  hover:border-l-[#EAB308] border-l-4 tracking-wider"
                onClick={() => handleCategorySelect("Taxi")}
              >
                <img src="Taxi.svg" alt="" />
                <div>
                  <p>Taxi</p>
                </div>
              </div>
              <div
                className="flex w-[350px] items-center gap-[25px] h-[40px] hover:underline hover:underline-offset-8  border-l-transparent  hover:border-l-[#6F6CF3] border-l-4  tracking-wider"
                onClick={() => handleCategorySelect("Shopping")}
              >
                <img src="House.svg" alt="" />
                <div>
                  <p>Shopping</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Category
        isvisible={showModal}
        onClose={() => setShowModal(false)}
      ></Category>
    </Fragment>
  );
}

export default Dropdown;
