import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AudienceOverviewChart = () => {
  // Chart options and data
  const options = {
    series: [
      {
        name: 'Income',
        data: [31, 40, 28, 51, 31, 40, 28, 51, 31, 40, 28, 51],
      },
      {
        name: 'Expenses',
        data: [0, 30, 10, 40, 30, 60, 50, 80, 70, 100, 90, 130],
      },
    ],
    chart: {
      height: 280,
      type: 'area',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 12,
        left: 0,
        bottom: 0,
        right: 0,
        blur: 2,
        color: 'rgba(132, 145, 183, 0.3)',
        opacity: 0.35,
      },
    },
    annotations: {
      xaxis: [
        {
          x: 312,
          strokeDashArray: 4,
          borderWidth: 1,
          borderColor: ['var(--bs-secondary)'],
        },
      ],
      points: [
        {
          x: 312,
          y: 52,
          marker: {
            size: 6,
            fillColor: ['var(--bs-primary)'],
            strokeColor: ['var(--bs-card-bg)'],
            strokeWidth: 4,
            radius: 5,
          },
          label: {
            borderWidth: 1,
            offsetY: -110,
            text: '50k',
            style: {
              background: ['var(--bs-primary)'],
              fontSize: '14px',
              fontWeight: '600',
            },
          },
        },
      ],
    },
    colors: ['#22c55e', 'rgba(106, 155, 155, 0.3)'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: [3, 3],
      dashArray: [0, 0],
      lineCap: 'round',
    },
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    yaxis: {
      labels: {
        offsetX: -12,
        offsetY: 0,
        formatter: function (value) {
          return '$' + value;
        },
      },
    },
    grid: {
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      show: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.05,
        opacityTo: 0.05,
        stops: [45, 100],
      },
    },
  };

  return (
    <div className="card-body pt-0">
      <div id="audience_overview" className="apex-charts">
        <ReactApexChart
          options={options}
          series={options.series}
          type="area"
          height={280}
        />
      </div>
    </div>
  );
};

export default AudienceOverviewChart;