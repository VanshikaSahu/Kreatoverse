

import React, { useState } from 'react'
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";
import {
  useIonViewWillEnter,
  useIonViewWillLeave,
} from "@ionic/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export const BarChartComponent = ({data}) => {

  useIonViewWillEnter(() => { 
    ChartJS.register(CategoryScale);
  }, []);

  useIonViewWillLeave(() => {
    ChartJS.unregister(CategoryScale);
  }, []);

    const options={
        responsive: true,
        legend: {
            display: false,
        },
        type:'bar',
        scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
      }
    }

  return (
          <>
          {data && <Bar
                plugins={[ChartDataLabels]} 
                data={data}
                width={null}
                height={null}
                options={options}
            />}
          </>

  )
}

