import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
function Frame() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex relative justify-center items-center h-[48px] w-[84px] border-2 bg-gray-100 border-gray-300 rounded-xl gap-[10px]"
      >
        <img src="house.svg" alt="" />
        {isOpen ? (
          <AiOutlineCaretUp className="h-[24px]" />
        ) : (
          <AiOutlineCaretDown className="h-[24px]" />
        )}
      </div>
      {isOpen && (
        <div className="bg-gray-100 shadow-2xl absolute top-[600px] flex flex-col items-start rounded-lg  w-[312px] h-[336px] px-[24px] py-[20px]">
          <div className="flex w-full flex-col cursor-pointer gap-[24px] overflow-y-auto snap-y">
            <div className="flex flex-col gap-[24px] ">
              <div className="flex justify-between">
                <img className="hover:scale-110" src="house (1).svg" alt="" />
                <img className="hover:scale-110" src="houseline.svg" alt="" />
                <img
                  className="hover:scale-110"
                  src="IdentificationBadge.svg"
                  alt=""
                />
                <img
                  className="hover:scale-110"
                  src="IdentificationCard.svg"
                  alt=""
                />
                <img className="hover:scale-110" src="Ladder.svg" alt="" />
                <img
                  className="hover:scale-110"
                  src="IntersectSquare.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <img className="hover:scale-110" src="ImageSquare.svg" alt="" />
                <img
                  className="hover:scale-110"
                  src="MagnifyingGlassPlus.svg"
                  alt=""
                />
                <img className="hover:scale-110" src="Microphone.svg" alt="" />
                <img
                  className="hover:scale-110"
                  src="MicrosoftExcelLogo.svg"
                  alt=""
                />
                <img className="hover:scale-110" src="NotePad.svg" alt="" />
                <img className="hover:scale-110" src="ListPlus.svg" alt="" />
              </div>
              <div className="flex justify-between">
                <img
                  className="hover:scale-110"
                  src="HourglassSimpleMedium.svg"
                  alt=""
                />
                <img className="hover:scale-110" src="NumberFive.svg" alt="" />
                <img
                  className="hover:scale-110"
                  src="NumberCircleSeven.svg"
                  alt=""
                />
                <img className="hover:scale-110" src="RoadHorizon.svg" alt="" />
                <img
                  className="hover:scale-110"
                  src="HourglassSimpleMedium.svg"
                  alt=""
                />
                <img
                  className="hover:scale-110"
                  src="AnchorSimple.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <img className="hover:scale-110" src="BezierCurve.svg" alt="" />
                <img className="hover:scale-110" src="Exclude.svg" alt="" />
                <img className="hover:scale-110" src="Vignette.svg" alt="" />
                <img className="hover:scale-110" src="Baseball.svg" alt="" />
                <img className="hover:scale-110" src="Question.svg" alt="" />
                <img className="hover:scale-110" src="Exam.svg" alt="" />
              </div>
              <div className="flex justify-between">
                <img className="hover:scale-110" src="Watch.svg" alt="" />
                <img className="hover:scale-110" src="GlobeSimple.svg" alt="" />
                <img className="hover:scale-110" src="OrangeSlice.svg" alt="" />
                <img className="hover:scale-110" src="Peace.svg" alt="" />
                <img className="hover:scale-110" src="Peace.svg" alt="" />
                <img className="hover:scale-110" src="Pencil.svg" alt="" />
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="264"
                height="2"
                viewBox="0 0 264 2"
                fill="none"
              >
                <path opacity="0.1" d="M0 1H264" stroke="black" />
              </svg>
              <div className="flex justify-between">
                <img src="Ellipse 130.svg" alt="" />
                <img src="Ellipse 131.svg" alt="" />
                <img src="Ellipse 132.svg" alt="" />
                <img src="Ellipse 133.svg" alt="" />
                <img src="Ellipse 134.svg" alt="" />
                <img src="Ellipse 135.svg" alt="" />
                <img src="Ellipse 136.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Frame;
