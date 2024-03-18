import Link from "next/link";
import { useState } from "react";
function Balance() {
  const [balance, setBalance] = useState("");

  // Function to handle changes in the balance input
  const handleInputChange = (e) => {
    // Remove non-numeric characters except commas
    const formattedBalance = e.target.value.replace(/[^0-9,]/g, "");
    // Update the balance state with the formatted value
    setBalance(formattedBalance);
  };
  const parsedBalance = parseFloat(balance.replace(/,/g, ""));
  const formattedBalance = isNaN(parsedBalance)
    ? " "
    : parsedBalance.toLocaleString();

  return (
    <div className="flex flex-col w-[100%] h-[100vh] justify-center items-center gap-[100px] bg-white">
      <div className="flex flex-col justify-center items-center gap-[30px] pt-[40px]">
        <div className="flex items-center gap-[10px]">
          <img className="w-[27px] h-[27px]" src="vector (1).svg" alt="" />
          <img className="w-[56px] h-[19px]" src="Geld (3).svg" alt="" />
        </div>
        <ul className="steps tracking-wide w-[20vw]">
          <li className="step step-info">Currecy</li>
          <li className="step step-info">Balance</li>

          <li className="step ">Finish</li>
        </ul>
      </div>
      <div className="w-[384px] h-[304px]  gap-[24px]  flex flex-col items-center">
        <div className="flex flex-col gap-[16px] items-center justify-center">
          <img className="w-[48px] h-[48px] " src="cash.svg" alt="" />

          <p className="text-[24px] text-black font-bold">
            Set up your cash Balance
          </p>
        </div>
        <div className="flex flex-col gap-[32px]">
          <div>
            <label className="input input-bordered flex items-center gap-2 h-[50px] w-[384px] border-gray-500 bg-gray-200 border text-black">
              <input
                type="text"
                value={formattedBalance}
                onChange={handleInputChange}
                className="grow"
                placeholder="Balance"
              />
            </label>
            <p className=" text-black text-[12px] pt-[12px] ">
              How much cash do you have in your wallet?
            </p>
          </div>
          <Link
            href={"/Finish"}
            className="btn h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl "
          >
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Balance;
// import { useState } from "react";

// function Balance() {
//   // State to hold the balance input value
// const [balance, setBalance] = useState("");

// // Function to handle changes in the balance input
// const handleInputChange = (e) => {
//   // Remove non-numeric characters except commas
//   const formattedBalance = e.target.value.replace(/[^0-9,]/g, "");
//   // Update the balance state with the formatted value
//   setBalance(formattedBalance);
// };

//   return (
//     <div className="flex flex-col w-full h-screen justify-center items-center gap-10 bg-white">
//       {/* Header */}
//       <div className="flex flex-col justify-center items-center gap-5">
//         <div className="flex items-center gap-2">
//           {/* Logo images */}
//           <img className="w-7 h-7" src="vector (1).svg" alt="" />
//           <img className="w-14 h-5" src="Geld (3).svg" alt="" />
//         </div>
//         {/* Steps indicator */}
//         <ul className="steps w-1/5">
//           <li className="step step-info">Currency</li>
//           <li className="step step-info">Balance</li>
//           <li className="step">Finish</li>
//         </ul>
//       </div>
//       {/* Balance input section */}
//       <div className="w-96 h-80 gap-5 flex flex-col items-center">
//         <div className="flex flex-col gap-2 items-center justify-center">
//           {/* Icon and title */}
//           <img className="w-12 h-12" src="cash.svg" alt="" />
//           <p className="text-lg font-bold">Set up your cash balance</p>
//         </div>
//         {/* Input field */}
//         <div className="flex flex-col gap-2">
//           <label className="input input-bordered flex items-center gap-2 h-12 w-full border-gray-500 bg-gray-200 border text-black">
//             {/* Balance input */}
// <input
//   type="text"
//   value={parseFloat(balance.replace(/,/g, "")).toLocaleString()}
//   onChange={handleInputChange}
//   className="grow"
//   placeholder="Balance"
// />
//           </label>
//           {/* Helper text */}
//           <p className="text-black text-sm">
//             How much cash do you have in your wallet?
//           </p>
//         </div>
//         {/* Confirm button */}
//         <button className="btn h-12 rounded-3xl w-full text-white bg-blue-500 text-xl">
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Balance;
