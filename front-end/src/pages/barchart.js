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
            data: [66, 144, 146, 116, 107, 131, 43],
            label: "Applied",
            borderColor: "rgb(109, 253, 181)",
            backgroundColor: "rgb(109, 253, 181,0.5)",
            borderWidth: 2,
          },
          {
            data: [40, 100, 44, 70, 63, 30, 10],
            label: "Accepted",
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
