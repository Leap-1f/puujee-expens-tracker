import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function DonutChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],

        datasets: [
          {
            label: "My First Dataset",
            data: [12, 19, 3, 5, 12],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: "right",
          },
        },
      },
    });

    return () => {
      // Cleanup: destroy the chart instance
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
}

export default DonutChart;
