import { useEffect } from "react";
import { Chart } from "chart.js";
function Rounded() {
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    ctx,
      {
        type: "doughnut",
        data: {
          labels: ["Accepted", "Pending", "Rejected"],
          datasets: [
            {
              data: [70, 10, 6],
              borderColor: [
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
              ],
              backgroundColor: [
                "rgb(75, 192, 192 )",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
        },
      };
  }, []);

  return (
    <>
      <div className="w-[400px] h-[242px]  ">
        <div className=" border-gray-400  rounded-xl  w-[400px] h-[242px]  shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
      ;
    </>
  );
}

export default Rounded;
