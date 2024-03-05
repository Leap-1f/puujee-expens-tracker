import Link from "next/link";
import { useRouter } from "next/router"; // Import useRouter hook

function Login() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <div className="w-[1440px] fixed h-[100vh] flex">
      <div className="w-[708px] flex justify-center items-center bg-white pl-[222px] pr-[126px] ">
        <div className="w-[384px] h-[555px]  flex flex-col items-center gap-[40px]">
          <div className="flex p-[5px] items-center gap-[10px] ">
            <img className="w-[23px] h-[23px]" src="vector.png" alt="" />
            <img src="Geld.svg" alt="" />
          </div>
          <div className="flex flex-col items-center gap-[8px]">
            <p className="text-[24px] text-black">Create Geld account</p>
            <p className="text-[16px] text-black">
              Sign up below to create your Wallet account
            </p>
          </div>
          <div className="w-[100%] h-[48px] h-fixed ">
            <div className="flex flex-col gap-[16px]">
              <label class="input input-bordered flex text-black h-[50px] border-gray-500 bg-gray-200 border text-blackflex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" class="grow" placeholder="Username" />
              </label>
              <label className="input input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              <label class="input text-black input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input type="password" class="" placeholder="password" />
              </label>
              <label class="input text-black input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input type="password" class="" placeholder=" Re-password" />
              </label>
            </div>
            <Link
              href={"/Login"}
              className="btn my-[30px] h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl "
            >
              Sign Up
            </Link>
            <div className="flex items-center justify-center gap-[10px]">
              <p className="text-[16px] text-black">Already have account?</p>
              <Link
                className="text-blue-500 text-[16px]"
                href={{
                  pathname: "/Login",
                }}
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
        {/* <div className=" w-[50%] ">
          <div className="flex flex-col items-center justify-between ">
            <div className="flex items-center gap-[10px] ">
              <img className="w-[30px] h-[30px]" src="vector.png" alt="" />
              <h1 className="flex  justify-center  text-2xl font-medium text-black">
                Geld
              </h1>
            </div>
            <div className="flex flex-col gap-[20px] items-center p-9">
              <div className="flex items-center gap-[10px]">
                <h1 className="flex  justify-center  text-2xl font-medium text-black">
                  Create Geld account
                </h1>
              </div>
              <h2 className="text-lg text-gray-700">
                Welcome back, Please enter your details
              </h2>
            </div>
            <div className="flex flex-col w-[100%] gap-[30px]">
             
             
             
              
             
            </div>
            <div className="flex gap-[11px] text-black my-9 text-xl">
              <p>Already have account? </p>
            
              {/* <Link></Link> */}
        {/* </div>
          </div> */}
        {/* // </div> */}
      </div>
      <div className="w-[708px]  bg-blue-600"></div>
    </div>
  );
}

export default Login;
