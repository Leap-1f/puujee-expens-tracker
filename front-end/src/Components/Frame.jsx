import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Frame() {
  const [isOpen, setIsOpen] = useState(false);

  // Define an array of image filenames
  const imageFilenames = [
    "house (1).svg",
    "houseline.svg",
    "IdentificationBadge.svg",
    "IdentificationCard.svg",
    "Ladder.svg",
    "ImageSquare.svg",
  ];
  const imageFilenames2 = [
    "IntersectSquare.svg",
    "ImageSquare.svg",
    "MagnifyingGlassPlus.svg",
    "Microphone.svg",
    "MicrosoftExcelLogo.svg",
    "NotePad.svg",
  ];
  const imageFilenames3 = [
    "ListPlus.svg",
    "HourglassSimpleMedium.svg",
    "NumberFive.svg",
    "NumberCircleSeven.svg",
    "RoadHorizon.svg",
    "AnchorSimple.svg",
  ];
  const imageFilenames4 = [
    "BezierCurve.svg",
    "Exclude.svg",
    "Vignette.svg",
    "Baseball.svg",
    "Question.svg",
    "Exam.svg",
  ];
  const imageFilenames5 = [
    "Ladder.svg",

    "Watch.svg",
    "GlobeSimple.svg",
    "OrangeSlice.svg",
    "Peace.svg",
    "Pencil.svg",
  ];
  const imageFilenames6 = [
    "Ellipse 130.svg",
    "Ellipse 131.svg",
    "Ellipse 132.svg",
    "Ellipse 133.svg",
    "Ellipse 134.svg",
    "Ellipse 135.svg",
    "Ellipse 136.svg",
  ];
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
        <div className="bg-gray-100 shadow-2xl absolute top-[480px] flex flex-wrap items-start rounded-lg  w-[312px] h-[336px] px-[24px] py-[20px]">
          <div className="flex w-full flex-col cursor-pointer gap-[24px] overflow-y-auto snap-y">
            <div className="flex w-[24px]  gap-[24px] ">
              {/* Map over the imageFilenames array to render each image */}
              {imageFilenames.map((filename, index) => (
                <img
                  key={index}
                  className="hover:scale-110"
                  src={filename}
                  alt=""
                />
              ))}
            </div>
            <div className="flex w-[24px]  gap-[24px] ">
              {/* Map over the imageFilenames array to render each image */}
              {imageFilenames2.map((filename, index) => (
                <img
                  key={index}
                  className="hover:scale-110"
                  src={filename}
                  alt=""
                />
              ))}
            </div>
            <div className="flex w-[24px]  gap-[24px] ">
              {/* Map over the imageFilenames array to render each image */}
              {imageFilenames3.map((filename, index) => (
                <img
                  key={index}
                  className="hover:scale-110"
                  src={filename}
                  alt=""
                />
              ))}
            </div>
            <div className="flex w-[24px]  gap-[24px] ">
              {/* Map over the imageFilenames array to render each image */}
              {imageFilenames4.map((filename, index) => (
                <img
                  key={index}
                  className="hover:scale-110"
                  src={filename}
                  alt=""
                />
              ))}
            </div>

            <div className="flex w-[24px]  gap-[24px] ">
              {/* Map over the imageFilenames array to render each image */}
              {imageFilenames5.map((filename, index) => (
                <img
                  key={index}
                  className="hover:scale-110"
                  src={filename}
                  alt=""
                />
              ))}
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
            <div className="flex w-[20px]  gap-[20px] ">
              {/* Map over the imageFilenames array to render each image */}
              {imageFilenames6.map((filename, index) => (
                <img
                  key={index}
                  className="hover:scale-110"
                  src={filename}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Frame;
