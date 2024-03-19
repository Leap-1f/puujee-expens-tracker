import Link from "next/link";
import * as Yup from "yup"; // Import Yup
import { useRouter } from "next/router";

import { Geld } from "@/components/Icon";
import { useFormik, FormikProvider, Form, Field, ErrorMessage } from "formik"; // Import Formik components

function CreatePage() {
  const router = useRouter();

  // Define the logIn function separately
  const logIn = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/api/signUp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const newData = await response.json();
      console.log(newData);

      // Redirect upon successful signup
      if (response.ok) {
        router.push("/Currency");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password confirmation is required"),
    }),
    onSubmit: async (values) => {
      await logIn(values); // Call logIn function here
    },
  });

  return (
    <FormikProvider value={formik}>
      <div className="w-[100%] h-[100vh] flex justify-center">
        <div className="w-[50%] flex justify-center items-center bg-white pl-[222px] pr-[126px] ">
          <div className="w-[384px] h-[555px]  flex flex-col items-center gap-[40px]">
            <div className="flex p-[5px] items-center gap-[10px] ">
              <Geld width="94" heigth="36"></Geld>
            </div>{" "}
            <div className="flex flex-col items-center gap-[8px]">
              <p className="text-[24px] text-black">Create Geld account</p>
              <p className="text-[16px] text-black">
                Sign up below to create your Wallet account
              </p>
            </div>
            <Form
              onSubmit={formik.handleSubmit}
              className="w-[100%] h-[48px] h-fixed"
            >
              <div className="flex flex-col gap-[16px]">
                <div className="input input-bordered flex text-black h-[50px] border-gray-500 bg-gray-200 border  items-center gap-2">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Username"
                    className="grow"
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
                <div className="input input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border text-black">
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="grow"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
                <div className="input text-black input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
                <div className="input text-black input-bordered flex items-center gap-2 h-[50px] border-gray-500 bg-gray-200 border">
                  <Field
                    type="password"
                    name="rePassword"
                    placeholder="Re-enter Password"
                  />
                </div>
                <ErrorMessage
                  name="rePassword"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                onClick={formik.handleSubmit}
                type="submit"
                className="btn my-[30px] h-[50px] rounded-3xl  w-[100%] text-white bg-blue-500 text-xl"
                disabled={formik.isSubmitting || !formik.isValid}
              >
                Sign Up
              </button>
              <div className="flex items-center justify-center gap-[10px]">
                <p className="text-[16px] text-black">
                  Already have an account?
                </p>
                <Link href="/Login">
                  <p className="text-blue-500 text-[16px]">Log In</p>
                </Link>
              </div>
            </Form>
          </div>
        </div>
        <div className="w-[50%] bg-blue-600"></div>
      </div>
    </FormikProvider>
  );
}

export default CreatePage;
