import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

function Rounded() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");

    if (chartRef.current === null) {
      chartRef.current = Chart({
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
            xAxes: [{ display: false }],
            yAxes: [{ display: false }],
          },
        },
      });
    }

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartRef.current !== null) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Doughnut chart */}
      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">
        Doughnut Chart
      </h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl w-full h-fit my-auto  shadow-xl pb-2">
          <canvas id="myChart"></canvas> {/* Canvas element for the chart */}
        </div>
      </div>
    </>
  );
}

export default Rounded;
