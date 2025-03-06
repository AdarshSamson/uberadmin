import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TrafficSourcesChart = () => {
  // Chart options and data
  const options = {
    series: [76], // Single data point for the radial bar
    chart: {
      height: '325',
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '75%',
          position: 'front',
        },
        track: {
          background: ['rgba(42, 118, 244, .18)'],
          strokeWidth: '80%',
          opacity: 0.5,
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '20px',
          },
        },
      },
    },
    stroke: {
      lineCap: 'butt',
    },
    colors: ['#95a0c5'],
    grid: {
      padding: {
        top: -10,
      },
    },
    labels: ['Average Results'],
    responsive: [
      {
        breakpoint: 1150,
        options: {
          chart: {
            height: '150',
          },
        },
      },
    ],
  };

  return (
    <div className="card-body pt-0">
      <div id="traffic_sources" className="apex-charts">
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          height={325}
        />
      </div>
    </div>
  );
};

export default TrafficSourcesChart;