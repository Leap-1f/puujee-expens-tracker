import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter hook

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize useRouter
  const logIn = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/signIn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const newData = await response.json();
      console.log(newData);

      if (response.ok) {
        router.push("/Dashboard");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const addUser = () => {
    logIn();
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center">
      <div className="w-[50%] flex justify-center items-center bg-white pl-[222px] pr-[126px] ">
        <div className="w-[384px] h-[555px]  flex flex-col items-center gap-[40px]">
          <div className="flex p-[5px] items-center gap-[10px] ">
            <img className="w-[23px] h-[23px]" src="vector.png" alt="" />
            <img src="Geld (3).svg" alt="" />
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <p className="text-[24px] text-black">Create Geld account</p>
            <p className="text-[16px] text-black">
              Welcome back, Please enter your details
            </p>
          </div>
          <div className="w-[100%] h-[48px] h-fixed ">
            <div className="flex flex-col gap-[16px]">
              <label className="input input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border text-black">
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className=""
                />
              </label>
            </div>
            <button
              className="btn my-[30px] h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl"
              onClick={addUser}
              disabled={email === "" || password === ""}
            >
              Log In
            </button>
            <div className="flex items-center justify-center gap-[10px]">
              <p className="text-[16px] text-black">Don't have an account?</p>
              <Link
                href={{
                  pathname: "/CreatePage",
                }}
              >
                <p className="text-blue-500 text-[16px]">Sign Up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-blue-600"></div>
    </div>
  );
}

export default Login;
