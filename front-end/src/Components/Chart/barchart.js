import { useEffect } from "react";
import { Chart, registerables } from "chart.js"; // Import registerables from chart.js

function Example() {
  useEffect(() => {
    // Register all required components
    Chart.register(...registerables);

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar", // Ensure you're using "bar" type
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        datasets: [
          {
            data: [
              3000000, 3000000, 3100000, 3000000, 3000000, 3000000, 3000000,
            ],
            label: "Income",
            borderColor: "rgb(109, 253, 181)",
            backgroundColor: "rgb(109, 253, 181,0.5)",
            borderWidth: 2,
          },
          {
            data: [
              2100000, 2100000, 2100000, 2100000, 2100000, 2100000, 2100000,
            ],
            label: "Expense",
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgb(75, 192, 192,0.5)",
            borderWidth: 2,
          },
        ],
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      {/* Bar chart */}

      <div className="w-[700px] h-[242px]  ">
        <div className=" border-gray-400  rounded-xl  w-[700px] h-[242px]  shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </>
  );
}

export default Example;
