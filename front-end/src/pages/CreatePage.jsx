import Link from "next/link";
import { useState } from "react";
function CreatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const signUp = async () => {
    if (password !== rePassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/api/signUp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, rePassword }),
      });
      const newData = await response.json();
      console.log(newData);
    } catch (error) {
      console.error("Error creating data:", error);
    }
    console.log(signUp);
  };
  const addUser = () => {
    signUp();
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center">
      <div className="w-[50%] flex justify-center items-center bg-white pl-[222px] pr-[126px] ">
        <div className="w-[384px] h-[555px]  flex flex-col items-center gap-[40px]">
          <div className="flex p-[5px] items-center gap-[10px] ">
            <img className="w-[23px] h-[23px]" src="vector.png" alt="" />
            <img src="Geld (3).svg" alt="" />
          </div>{" "}
          <div className="flex flex-col items-center gap-[8px]">
            <p className="text-[24px] text-black">Create Geld account</p>
            <p className="text-[16px] text-black">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="w-[100%] h-[48px] h-fixed">
            <div className="flex flex-col gap-[16px]">
              <label className="input input-bordered flex text-black h-[50px] border-gray-500 bg-gray-200 border  items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="grow"
                  placeholder="Username"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grow"
                  placeholder="Email"
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" />
                </svg>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=""
                  placeholder="password"
                />
              </label>
              <label className="input text-black input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  className=""
                  placeholder=" Re enter password"
                />{" "}
                {}
              </label>
            </div>
            <Link
              href={"/Login"}
              onClick={addUser}
              disabled={name === "" || email === "" || password === ""}
              className="btn my-[30px] h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl "
            >
              Sign Up
            </Link>

            <div className="flex items-center justify-center gap-[10px]">
              <p className="text-[16px] text-black">Already have an account?</p>
              <Link href="/Login">
                <p className="text-blue-500 text-[16px]">Log In</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-blue-600"></div>
    </div>
  );
}

export default CreatePage;
