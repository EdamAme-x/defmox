"use client";
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';

const ApexChart = (props: {
    data: {
        x: any,
        y: number[]
    }[]
}) => {
    
  try{

  if (typeof window === 'undefined') return <>Loading...</>;

  const series = [
    {
      name: 'candle',
      data: props.data
    },
  ];

  const options = {
    chart: {
      height: 500,
      type: 'candlestick',
    },
    title: {
      text: 'DFX Chart',
      align: 'left',
    },
    annotations: {
      xaxis: [
        {
          x: new Date().getTime(),
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: '#00E396',
            },
            orientation: 'horizontal',
            offsetY: 7,
            text: 'Defmox',
          },
        },
      ],
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (val: any) {
          return dayjs(val).format('MMM DD HH:mm');
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div id="chart" className="flex flex-col">
      <ReactApexChart options={options as unknown as any} series={series} type="candlestick" height={350} />
      <style>
        {`
        .apexcharts-tooltip {
          display: none;
        }
        `}
      </style>
    </div>
  );

  }catch (_e) {
    return <></>
  }
};

export { ApexChart };
