import Link from "next/link";
import { Geld } from "@/components/Icon";
import { useFormik, FormikProvider } from "formik"; // Import Formik
import * as Yup from "yup"; // Import Yup for validation schema

function Currency() {
  const formik = useFormik({
    initialValues: {
      Currency: "",
    },
    validationSchema: Yup.object().shape({
      Currency: Yup.string().required("Currency is required"),
    }),
  });
  const transactionCurrency = async (values) => {
    try {
      const response = await fetch("http://localhost:8080/api/transaction", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const currencyData = await response.json();
      console.log(currencyData);
    } catch (error) {
      console.error("Error:", error);
    }
    async (values) => {
      await transactionCurrency(values);
    };
  };

  return (
    <FormikProvider value={formik}>
      <div className="flex flex-col w-[100%] h-[100vh] items-center justify-center gap-[100px] bg-white">
        <div className="flex flex-col justify-center items-center gap-[30px] pt-[40px]">
          <div className="flex items-center gap-[10px]">
            <Geld width="94" heigth="36"></Geld>
          </div>
          <ul className="steps w-[20vw]">
            <li className="step step-info tracking-wide">Currency</li>
            <li className="step tracking-wide">Balance</li>
            <li className="step tracking-wide">Finish</li>
          </ul>
        </div>
        <div className="w-[384px] h-[304px] gap-[24px] flex flex-col items-center">
          <div className="flex flex-col gap-[16px] items-center justify-center">
            <img className="w-[48px] h-[48px]" src="cash.svg" alt="" />
            <p className="text-[24px] text-black font-bold">
              Select base Currency
            </p>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div>
              <select
                className="select select-primary bg-gray-300 text-black text-md w-[384px] h-[64px]"
                value={formik.values.Currency}
                onChange={formik.handleChange("Currency")}
              >
                <option disabled selected>
                  Select your currency
                </option>
                <option value="MNT">Mongolian Tugrik</option>
                <option value="USD">US Dollar</option>
                <option value="RUB">Russian Ruble</option>
              </select>
              <p className=" text-black text-[12px] pt-[12px]">
                Таны сонгосон үндсэн валют нь таны хамгийн их ашигладаг мөнгөн
                тэмдэгт байх ёстой. Бусад валютаар хийх бүх гүйлгээг үүн дээр
                үндэслэн тооцохыг анхаарна уу?
              </p>
              {formik.errors.Currency && formik.touched.Currency && (
                <p className="text-red-500 text-sm pt-[12px]">
                  {formik.errors.Currency}
                </p>
              )}
            </div>
            <Link href="/Balance">
              <p className="btn h-[50px] rounded-3xl w-[100%] text-white bg-blue-500 text-xl">
                Confirm
              </p>
            </Link>
          </div>
        </div>
      </div>
    </FormikProvider>
  );
}

export default Currency;
