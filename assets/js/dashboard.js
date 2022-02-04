// total delivery cost sparkline
const refreshTotalDeliverySparkline = () => {
  try {
    $("#total-delivery-cost").sparkline([5, 6, 8, 9, 7, 6, 3, 4, 3, 4, 6, 7], {
      type: "line",
      width: "100%",
      height: "75px",
      lineColor: "#3366cc",
      fillColor: "#ffffff",
      lineWidth: 3,
      spotColor: "#cc0000",
      minSpotColor: "#cc0000",
      maxSpotColor: "#cc0000",
      highlightSpotColor: "#cc0000",
      highlightLineColor: "#cc0000",
      spotRadius: 0,
    });
  } catch (e) {
    console.error(e);
  }
};
// end total delivery cost sparkline

// total weight delivered sparkline
const refreshTotalWeightSparkline = () => {
  try {
    $("#total-weight-delivered").sparkline(
      [5, 6, 8, 9, 7, 6, 3, 4, 3, 4, 6, 7],
      {
        type: "line",
        width: "100%",
        height: "75px",
        lineColor: "#3366cc",
        fillColor: "#ffffff",
        lineWidth: 3,
        spotColor: "#cc0000",
        minSpotColor: "#cc0000",
        maxSpotColor: "#cc0000",
        highlightSpotColor: "#cc0000",
        highlightLineColor: "#cc0000",
        spotRadius: 0,
      }
    );
  } catch (e) {
    console.error(e);
  }
};
// end total weight delivered sparkline

// delivery analytics chart
const setupDeliveryAnalyticsChart = () => {
  try {
    const data = {
      labels: [
        "1 Sep",
        "4 Sep",
        "8 Sep",
        "12 Sep",
        "16 Sep",
        "20 Sep",
        "24 Sep",
        "28 Sep",
      ],
      datasets: [
        {
          label: "Rates",
          backgroundColor: "#fff",
          borderColor: "#00b8e6",
          data: [0, 10, 5, 2, 20, 30, 45, 40],
        },
      ],
    };

    const config = {
      type: "line",
      data,
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#cc0000",
              font: {
                size: 14,
                weight: 600,
              },
            },
          },
        },
      },
    };

    const deliveryAnalyticsChart = new Chart(
      document.getElementById("delivery-analytics"),
      config
    );
  } catch (e) {
    console.error(e);
  }
};
// end delivery analytics chart

// pipes delivery summary pie chart
const setupPipesDeliveryPieChart = () => {
  try {
    const data = {
      labels: ["HDPE", "PPR"],
      datasets: [
        {
          label: "Pipes Delivery Summary",
          data: [500, 180],
          backgroundColor: ["#6699ff", "#3366cc"],
          hoverOffset: 4,
        },
      ],
    };
    const config = {
      type: "pie",
      data,
    };

    const pipesDeliveryPieChart = new Chart(
      document.getElementById("pipes-delivery-summary"),
      config
    );
  } catch (e) {
    console.error(e);
  }
};
// end pipes delivery summary pie chart

// calendar
const setupCalendar = () => {
  try {
    $("#calendar").calendar({ showTodayButton: false });
  } catch (e) {
    console.error(e);
  }
};

$(document).ready(() => {
  //===============================================
  // SETUP DASHBOARD SPARKLINES
  //===============================================
  refreshTotalDeliverySparkline();

  refreshTotalWeightSparkline();

  //===============================================
  // SETUP CHARTJS CHARTS
  //===============================================
  setupDeliveryAnalyticsChart();

  setupPipesDeliveryPieChart();

  //===============================================
  // SETUP CALENDAR
  //===============================================
  setupCalendar();
});
